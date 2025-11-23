const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { mode, customerEmail, metadata } = JSON.parse(event.body);

    let sessionConfig = {
      payment_method_types: ['card'],
      mode: mode,
      success_url: `${event.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${event.headers.origin}/tradie`,
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        receipt_email: 'thalya@verdantlabs.com.au', // Always send receipts here
      },
    };

    if (mode === 'payment') {
      // One-time payment for $299 setup
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: 'Express Build - Setup Fee',
              description: 'One-time setup fee for your tradie website',
            },
            unit_amount: 29900, // $299.00 in cents
          },
          quantity: 1,
        },
      ];
      // Enable automatic tax calculation if needed
      sessionConfig.payment_intent_data = {
        receipt_email: 'thalya@verdantlabs.com.au',
        metadata: metadata,
      };
    } else if (mode === 'subscription') {
      // Recurring subscription for $99/month
      // You'll need to create a Price in Stripe Dashboard and use its ID
      sessionConfig.line_items = [
        {
          price: process.env.STRIPE_RECURRING_PRICE_ID,
          quantity: 1,
        },
      ];
      sessionConfig.subscription_data = {
        metadata: {
          ...metadata,
          receipt_email: 'thalya@verdantlabs.com.au',
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
