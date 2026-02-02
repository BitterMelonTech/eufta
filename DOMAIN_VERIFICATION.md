# Domain Verification Guide for Resend

## Step-by-Step: Verify eufta.in in Resend

### 1. Go to Resend Domains
- Visit: https://resend.com/domains
- Log in with your Resend account

### 2. Add Your Domain
- Click "Add Domain"
- Enter: `eufta.in`
- Click "Add"

### 3. Add DNS Records
Resend will show you DNS records to add. You'll need to add these to your domain's DNS settings:

**Example DNS records (Resend will give you exact values):**
- **Type:** TXT
- **Name:** `_resend`
- **Value:** (Resend will provide this)

- **Type:** MX (if required)
- **Name:** `@` or `eufta.in`
- **Value:** (Resend will provide this)

### 4. Where to Add DNS Records
- Go to your domain registrar (where you bought eufta.in)
- Or your DNS provider (Cloudflare, Route53, etc.)
- Add the DNS records Resend provided
- Save changes

### 5. Wait for Verification
- Resend will automatically check DNS records
- Usually takes 5-15 minutes
- You'll see "Verified" status in Resend dashboard

### 6. Once Verified
- You can use `info@eufta.in` as the "from" address
- Emails will be sent from your domain
- Better deliverability and branding

## For Vercel Environment Variables

Once domain is verified, add in Vercel:
- `RESEND_FROM_EMAIL` = `info@eufta.in`

## Troubleshooting

- **DNS not updating?** Can take up to 48 hours (usually much faster)
- **Verification failed?** Double-check DNS records match exactly
- **Need help?** Check Resend's documentation or support
