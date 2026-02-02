# Resend Email Setup Guide

## Quick Setup Steps

### 1. Sign up for Resend
- Go to https://resend.com
- Sign up for a free account (100 emails/day free)
- Verify your email

### 2. Get Your API Key
- Go to https://resend.com/api-keys
- Click "Create API Key"
- Name it: "eufta-in-production"
- Copy the API key (starts with `re_`)

### 3. Verify Your Domain (Optional but Recommended)
- Go to https://resend.com/domains
- Add your domain: `eufta.in`
- Add the DNS records they provide
- Wait for verification (usually a few minutes)

### 4. Set Environment Variables

Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=noreply@eufta.in
```

**Important:** 
- `.env.local` is already in `.gitignore` - it won't be committed to GitHub
- For production (Vercel/Netlify), add these as environment variables in your hosting dashboard

### 5. Test It

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out the "Get the 2026 Tariff Schedule PDF" form
4. Submit
5. Check info@eufta.in inbox - you should receive an email!

## Production Deployment

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `RESEND_API_KEY` = your API key
   - `RESEND_FROM_EMAIL` = noreply@eufta.in (or your verified domain)

### Netlify
1. Go to Site settings
2. Navigate to "Environment variables"
3. Add the same variables as above

## Email Format

When a customer requests the PDF, you'll receive an email at **info@eufta.in** with:
- Customer's email address
- Timestamp
- Action required message
- Reply-to set to customer's email (so you can reply directly)

## Troubleshooting

- **No emails received?** Check your Resend dashboard for logs
- **API key error?** Make sure it starts with `re_` and has no spaces
- **Domain not verified?** You can use Resend's test domain temporarily, but verify your own domain for production
