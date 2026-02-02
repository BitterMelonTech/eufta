# Vercel Deployment Setup Guide

## Step-by-Step Instructions

### 1. Connect Your GitHub Repository to Vercel

1. Go to https://vercel.com
2. Sign up or log in (you can use your GitHub account)
3. Click "Add New Project"
4. Import your repository: `BitterMelonTech/eufta`
5. Vercel will auto-detect Next.js - click "Deploy"

### 2. Add Environment Variables

**Before or after deployment, add these environment variables:**

1. In your Vercel project dashboard, go to **Settings**
2. Click on **Environment Variables** in the left sidebar
3. Add the following variables:

   **Variable 1:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_BgVUYpLg_KUuWtdeYxyUuzCNxnME1g7s2`
   - **Environment:** Select all (Production, Preview, Development)
   - Click "Save"

   **Variable 2:**
   - **Name:** `RESEND_FROM_EMAIL`
   - **Value:** `noreply@eufta.in`
   - **Environment:** Select all (Production, Preview, Development)
   - Click "Save"

### 3. Redeploy (if already deployed)

If you already deployed before adding environment variables:
1. Go to the **Deployments** tab
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**
4. This will trigger a new deployment with the environment variables

### 4. Verify Domain (Optional but Recommended)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain: `eufta.in`
3. Follow Vercel's DNS instructions to verify

### 5. Test Email Functionality

1. Visit your deployed site
2. Go to the home page
3. Scroll to "Get the 2026 Tariff Schedule PDF" form
4. Enter a test email and submit
5. Check **info@eufta.in** inbox - you should receive the notification email!

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - your API key won't be committed to GitHub
- ✅ Environment variables in Vercel are encrypted and secure
- ✅ The API route `/api/pdf-request` will work automatically once variables are set
- ✅ You'll receive emails at **info@eufta.in** whenever someone requests the PDF

## Troubleshooting

- **No emails received?** 
  - Check Vercel function logs (Deployments → Click deployment → Functions tab)
  - Verify environment variables are set correctly
  - Check Resend dashboard for email logs

- **Build fails?**
  - Make sure all environment variables are added
  - Check Vercel build logs for errors

## That's It!

Once you add the environment variables in Vercel and redeploy, email notifications will work automatically. Every PDF request will send you an email at info@eufta.in with the customer's email address.
