import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { mode, customerEmail, metadata } = req.body;

    // Get the origin from request headers
    const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || 'http://localhost:3000';

    let sessionConfig = {
      payment_method_types: ['card'],
      mode: mode,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/tradie`,
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        receipt_email: 'thalya@verdantlabs.com.au', // Always send receipts here
      },
    };

    if (mode === 'payment') {
      // DEPRECATED: Old one-time payment flow
      // Use mode === 'subscription' for the new $399 + $99/mo pricing
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: 'Express Build - Setup Fee',
              description: 'One-time setup fee for your tradie website',
            },
            unit_amount: 39900, // $399.00 in cents
          },
          quantity: 1,
        },
      ];
      sessionConfig.payment_intent_data = {
        receipt_email: 'thalya@verdantlabs.com.au',
        metadata: metadata,
      };
    } else if (mode === 'subscription') {
      // NEW PRICING: $399 upfront + $99/month for 24 months
      // Customer pays $399 today, then $99/month starting next month for 24 months
      sessionConfig.line_items = [
        {
          // One-time setup fee: $399
          price: process.env.STRIPE_SETUP_FEE_PRICE_ID,
          quantity: 1,
        },
        {
          // Recurring monthly fee: $99/month
          price: process.env.STRIPE_RECURRING_PRICE_ID,
          quantity: 1,
        },
      ];
      sessionConfig.subscription_data = {
        metadata: {
          ...metadata,
          receipt_email: 'thalya@verdantlabs.com.au',
          plan_duration_months: '24', // Track that this is a 24-month plan
        },
        // Trial period delays the first $99 payment by 30 days
        // Customer pays $399 today, then first $99 payment in 30 days
        trial_period_days: 30,
      };
      // Add invoice settings to ensure receipts are sent
      sessionConfig.subscription_data.invoice_settings = {
        issuer: {
          type: 'self',
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({
      sessionId: session.id,
      url: session.url // Return the checkout URL for direct redirect
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ error: error.message });
  }
}
