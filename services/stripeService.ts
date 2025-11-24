// Modern Stripe Checkout using direct URL redirect
// No need for Stripe.js library - just redirect to the checkout URL

interface CreateCheckoutSessionParams {
  priceId?: string;
  mode: 'payment' | 'subscription' | 'setup';
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

export const createCheckoutSession = async (params: CreateCheckoutSessionParams) => {
  try {
    console.log('Creating checkout session with params:', params);

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Response error data:', errorData);
      throw new Error(`Failed to create checkout session: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    if (!data.url) {
      throw new Error('No checkout URL in response');
    }

    return data.url; // Return the checkout URL instead of sessionId
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const redirectToCheckout = async (checkoutUrl: string) => {
  console.log('Redirecting to Stripe Checkout URL:', checkoutUrl);

  // Modern approach: Direct redirect to Stripe Checkout URL
  // No need to load Stripe.js for this
  window.location.href = checkoutUrl;
};
