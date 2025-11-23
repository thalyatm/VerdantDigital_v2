/**
 * BACKEND API EXAMPLE - Create Checkout Session
 *
 * This file shows how to implement the backend API endpoint for Stripe.
 * You'll need to deploy this on your backend (Node.js/Express, Netlify Functions, Vercel, etc.)
 *
 * Setup:
 * 1. Install Stripe on your backend: npm install stripe
 * 2. Get your Secret Key from Stripe Dashboard
 * 3. Create your Products and Prices in Stripe Dashboard
 */

// Example using Express.js
const express = require('express');
const stripe = require('stripe')('sk_test_your_secret_key_here'); // Replace with your secret key
const app = express();

app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { mode, customerEmail, metadata } = req.body;

    let sessionConfig = {
      payment_method_types: ['card'],
      mode: mode,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/tradie`,
      customer_email: customerEmail,
      metadata: metadata,
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
    } else if (mode === 'subscription') {
      // Recurring subscription for $99/month
      // You'll need to create a Price in Stripe Dashboard and use its ID
      sessionConfig.line_items = [
        {
          price: 'price_your_recurring_price_id', // Replace with your Stripe Price ID
          quantity: 1,
        },
      ];
      sessionConfig.subscription_data = {
        metadata: metadata,
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Example using Netlify Functions (save as netlify/functions/create-checkout-session.js)
/*
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { mode, customerEmail, metadata } = JSON.parse(event.body);

    let sessionConfig = {
      payment_method_types: ['card'],
      mode: mode,
      success_url: `${event.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${event.headers.origin}/tradie`,
      customer_email: customerEmail,
      metadata: metadata,
    };

    if (mode === 'payment') {
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: 'Express Build - Setup Fee',
              description: 'One-time setup fee for your tradie website',
            },
            unit_amount: 29900,
          },
          quantity: 1,
        },
      ];
    } else if (mode === 'subscription') {
      sessionConfig.line_items = [
        {
          price: process.env.STRIPE_RECURRING_PRICE_ID,
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
*/

app.listen(3001, () => console.log('Server running on port 3001'));
