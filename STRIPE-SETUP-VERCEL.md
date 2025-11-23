# Stripe Setup Guide for Vercel

Complete step-by-step guide to connect Stripe payments to your Verdant Digital website hosted on Vercel.

## Overview

Your website will accept payments for:
- **$299 AUD** - One-time Express Build setup fee
- **$99 AUD/month** - Monthly subscription (optional)

All payment receipts will automatically be sent to **thalya@verdantlabs.com.au** via Resend.

---

## Step 1: Set Up Stripe Account

### 1.1 Create or Log Into Stripe

1. Go to https://dashboard.stripe.com/register (or login if you have an account)
2. Complete your business profile
3. Start in **Test Mode** (toggle in top right) to test everything first

### 1.2 Get Your API Keys

1. In Stripe Dashboard, click **"Developers"** in top navigation
2. Click **"API keys"** in left sidebar
3. You'll see two keys:

**Copy these somewhere safe:**
- **Publishable key:** `pk_test_...` (for frontend)
- **Secret key:** `sk_test_...` (for backend - keep private!)

---

## Step 2: Create the $99/Month Subscription Product

1. In Stripe Dashboard, go to **Products** → **"+ Add product"**
2. Fill in:
   - **Name:** `Express Build - Monthly Subscription`
   - **Description:** `Monthly website hosting, support, and maintenance for tradies`
3. Under **Pricing:**
   - Click **"+ Add another price"**
   - **Price:** `99.00`
   - **Currency:** `AUD`
   - **Billing period:** `Monthly`
   - **Recurring**
4. Click **"Save product"**
5. **IMPORTANT:** Copy the **Price ID** (starts with `price_...`) - you'll need this!

---

## Step 3: Set Up Webhook (IMPORTANT!)

Webhooks tell your website when a payment succeeds so you can send receipt emails.

### 3.1 Deploy to Vercel First

Before setting up the webhook, you need your live Vercel URL:

1. Push your code to GitHub (we'll do this at the end)
2. Connect your GitHub repo to Vercel:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click **"Deploy"**
3. Once deployed, copy your Vercel URL (e.g., `https://your-site.vercel.app`)

### 3.2 Create Webhook in Stripe

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **"+ Add endpoint"**
3. **Endpoint URL:** Enter your Vercel URL + webhook path:
   ```
   https://YOUR-SITE.vercel.app/api/stripe-webhook
   ```
   Replace `YOUR-SITE` with your actual Vercel domain

4. Click **"Select events"** and choose:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`

5. Click **"Add endpoint"**

6. Click on the webhook you just created

7. **IMPORTANT:** Copy the **Signing secret** (starts with `whsec_...`)

---

## Step 4: Set Up Resend for Email Receipts

### 4.1 Create Resend Account

1. Go to https://resend.com and sign up
2. Verify your email

### 4.2 Add Your Domain

1. In Resend dashboard, go to **Domains**
2. Click **"+ Add Domain"**
3. Enter: `verdantdigital.com.au`
4. Add the DNS records shown to your domain provider:
   - Usually 2-3 DNS records (TXT, MX, CNAME)
5. Wait for verification (5-30 minutes)

### 4.3 Create API Key

1. In Resend dashboard, go to **API Keys**
2. Click **"+ Create API Key"**
3. Name it: `Verdant Digital Production`
4. Click **"Create"**
5. **Copy the API key** (starts with `re_...`) - you won't see it again!

---

## Step 5: Configure Environment Variables in Vercel

Now add all your keys to Vercel:

1. Go to your Vercel project dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in left sidebar
4. Add each variable below:

| Variable Name | Value | Where to Get It |
|--------------|-------|-----------------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` | Step 1.2 - Stripe API Keys |
| `STRIPE_SECRET_KEY` | `sk_test_...` | Step 1.2 - Stripe API Keys |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Step 3.2 - Stripe Webhook |
| `STRIPE_RECURRING_PRICE_ID` | `price_...` | Step 2 - Product Price ID |
| `RESEND_API_KEY` | `re_...` | Step 4.3 - Resend API Key |

**For each variable:**
1. Click **"Add New"**
2. Enter the **Name** (exactly as shown above)
3. Paste the **Value**
4. Select environments: ✅ Production, ✅ Preview, ✅ Development
5. Click **"Save"**

### Important Notes:
- The `VITE_` prefix is required for frontend variables
- Double-check each value - one typo breaks everything
- After adding all variables, click **"Redeploy"** to apply them

---

## Step 6: Test the Integration

### 6.1 Test Contact Form

1. Go to your live website
2. Scroll to the contact section
3. Fill out and submit the form
4. Check `thalya@verdantlabs.com.au` for the email

### 6.2 Test Stripe Payment (Test Mode)

1. On your website, click **"Get Started"**
2. Choose **"Express Build"** → **"Quick Start"**
3. At checkout, use Stripe test card:
   - **Card:** `4242 4242 4242 4242`
   - **Expiry:** Any future date (e.g., 12/25)
   - **CVC:** Any 3 digits (e.g., 123)
   - **Postal:** Any valid code (e.g., 2000)

4. Complete the payment
5. You should:
   - Be redirected to the success page
   - Receive a payment receipt email at `thalya@verdantlabs.com.au`

### 6.3 Verify in Stripe Dashboard

1. Go to Stripe Dashboard → **Payments**
2. You should see your test payment
3. Go to **Developers** → **Webhooks**
4. Click on your webhook
5. Check **"Events"** tab - should show successful events

---

## Step 7: Go Live with Real Payments

Once testing works perfectly:

### 7.1 Switch Stripe to Live Mode

1. In Stripe Dashboard, toggle from **Test Mode** to **Live Mode** (top right)
2. Complete business verification if prompted
3. Get your **live API keys**:
   - Go to **Developers** → **API keys**
   - Copy **live publishable key** (`pk_live_...`)
   - Copy **live secret key** (`sk_live_...`)

### 7.2 Create Live Webhook

1. In **Live Mode**, go to **Developers** → **Webhooks**
2. Click **"+ Add endpoint"**
3. Enter same URL: `https://YOUR-SITE.vercel.app/api/stripe-webhook`
4. Select same events: `checkout.session.completed`, `payment_intent.succeeded`
5. Click **"Add endpoint"**
6. Copy the new **live webhook secret** (`whsec_...`)

### 7.3 Update Vercel Environment Variables

1. In Vercel project → **Settings** → **Environment Variables**
2. **Update these 3 variables** with live values:
   - `VITE_STRIPE_PUBLISHABLE_KEY` → `pk_live_...`
   - `STRIPE_SECRET_KEY` → `sk_live_...`
   - `STRIPE_WEBHOOK_SECRET` → `whsec_...` (live)

3. Click **"Redeploy"** to apply changes

### 7.4 Final Live Test

Do one real small payment (you can refund it):
1. Complete a real purchase with a real card
2. Verify receipt email arrives at `thalya@verdantlabs.com.au`
3. Check Stripe Dashboard for the payment
4. Refund if needed: Stripe Dashboard → Payments → Select payment → Refund

---

## Troubleshooting

### Emails Not Sending

**Check Resend Domain:**
- Go to Resend → Domains
- Ensure `verdantdigital.com.au` is verified ✅
- If pending, check DNS records with your domain provider

**Check Resend Logs:**
- Go to Resend → Logs
- Look for failed emails and error messages

### Payments Not Working

**Check Environment Variables:**
- Vercel → Settings → Environment Variables
- Verify all 5 variables are set correctly
- Make sure no extra spaces in values
- Redeploy after changes

**Check Webhook:**
- Stripe → Developers → Webhooks
- Click your webhook → Events tab
- Look for failed events (red X)
- Check error messages

**Check Browser Console:**
- Open browser DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed API calls

### Contact Form Not Submitting

**Check API Endpoint:**
- Open DevTools → Network tab
- Submit form
- Look for `/api/contact-form` request
- Check response for errors

**Check Vercel Function Logs:**
- Vercel Dashboard → Your Project → Logs
- Look for errors from `api/contact-form`

---

## Quick Reference

### Test Card Numbers (Test Mode Only)

| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Card declined |
| `4000 0027 6000 3184` | Requires authentication (3D Secure) |

### Environment Variables Checklist

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` - Frontend Stripe key
- [ ] `STRIPE_SECRET_KEY` - Backend Stripe key
- [ ] `STRIPE_WEBHOOK_SECRET` - Webhook signing secret
- [ ] `STRIPE_RECURRING_PRICE_ID` - $99/mo price ID
- [ ] `RESEND_API_KEY` - Email sending key

### Important URLs

- Stripe Dashboard: https://dashboard.stripe.com
- Resend Dashboard: https://resend.com/home
- Vercel Dashboard: https://vercel.com/dashboard
- Your Webhook URL: `https://YOUR-SITE.vercel.app/api/stripe-webhook`

---

## Support

If you get stuck:
1. Check Vercel function logs (Vercel Dashboard → Logs)
2. Check Stripe webhook events (Stripe → Webhooks → Your endpoint → Events)
3. Check Resend logs (Resend → Logs)
4. All receipts should go to: **thalya@verdantlabs.com.au**

---

**You're all set!** Once you complete these steps, your website will be fully integrated with Stripe payments and automatic email receipts.
