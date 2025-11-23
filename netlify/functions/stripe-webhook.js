const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    // Verify the webhook signature
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' })
    };
  }

  // Handle the event
  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object;

        // Send receipt email via Resend
        await sendReceiptEmail(session);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = stripeEvent.data.object;
        console.log('Payment succeeded:', paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };
  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Webhook processing failed' })
    };
  }
};

async function sendReceiptEmail(session) {
  const { customer_email, metadata, amount_total, currency } = session;

  // Format amount (Stripe uses smallest currency unit, e.g., cents)
  const amount = (amount_total / 100).toFixed(2);
  const currencyFormatted = currency.toUpperCase();

  // Extract metadata for email
  const {
    product = 'Express Build Setup',
    name = '',
    business = '',
    phone = '',
    location = '',
    trade = '',
    currentWebsite = '',
    goals = '',
    advertising = 'false',
  } = metadata || {};

  // Build email HTML
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D0D0F; color: #00FF9D; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .receipt-item { margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #00FF9D; }
        .label { font-weight: bold; color: #555; }
        .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Payment Receipt</h1>
          <p>Thank you for your payment!</p>
        </div>
        <div class="content">
          <h2>Order Details</h2>
          <div class="receipt-item">
            <p><span class="label">Product:</span> ${product}</p>
            <p><span class="label">Amount Paid:</span> $${amount} ${currencyFormatted}</p>
            <p><span class="label">Customer Email:</span> ${customer_email || 'Not provided'}</p>
            <p><span class="label">Session ID:</span> ${session.id}</p>
          </div>

          ${name ? `
          <h2>Customer Information</h2>
          <div class="receipt-item">
            ${name ? `<p><span class="label">Name:</span> ${name}</p>` : ''}
            ${business ? `<p><span class="label">Business:</span> ${business}</p>` : ''}
            ${phone ? `<p><span class="label">Phone:</span> ${phone}</p>` : ''}
            ${location ? `<p><span class="label">Location:</span> ${location}</p>` : ''}
            ${trade ? `<p><span class="label">Trade:</span> ${trade}</p>` : ''}
            ${currentWebsite ? `<p><span class="label">Current Website:</span> ${currentWebsite}</p>` : ''}
            ${goals ? `<p><span class="label">Goals:</span> ${goals}</p>` : ''}
            ${advertising === 'true' ? `<p><span class="label">Advertising Add-on:</span> Interested</p>` : ''}
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>Verdant Digital | hello@verdantdigital.com.au</p>
          <p>This is an automated receipt for internal records.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send email to thalya@verdantlabs.com.au
    await resend.emails.send({
      from: 'Verdant Digital <noreply@verdantdigital.com.au>',
      to: 'thalya@verdantlabs.com.au',
      subject: `New Payment Receipt - ${product} - $${amount} ${currencyFormatted}`,
      html: emailHtml,
    });

    console.log('Receipt email sent successfully to thalya@verdantlabs.com.au');
  } catch (error) {
    console.error('Error sending receipt email:', error);
    throw error;
  }
}
