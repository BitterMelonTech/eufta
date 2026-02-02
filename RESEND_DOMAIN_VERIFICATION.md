# How to Verify eufta.in Domain in Resend

## Step-by-Step Guide to Verify Your Domain

### Step 1: Log into Resend
1. Go to https://resend.com
2. Sign in to your account (the one with API key `re_BgVUYpLg_KUuWtdeYxyUuzCNxnME1g7s2`)

### Step 2: Navigate to Domains
1. In the Resend dashboard, click on **"Domains"** in the left sidebar
2. Or go directly to: https://resend.com/domains

### Step 3: Add Your Domain
1. Click the **"Add Domain"** button (usually top right)
2. Enter your domain: `eufta.in` (without www or http://)
3. Click **"Add"** or **"Continue"**

### Step 4: Get DNS Records
Resend will show you DNS records to add. You'll typically see:

**Record Type 1: TXT Record (for domain verification)**
- **Name/Host:** `@` or `eufta.in`
- **Type:** `TXT`
- **Value:** Something like `resend-domain-verification=abc123xyz...`
- **TTL:** 3600 (or default)

**Record Type 2: CNAME Record (for DKIM)**
- **Name/Host:** `resend._domainkey` or similar
- **Type:** `CNAME`
- **Value:** `resend._domainkey.resend.com` or similar
- **TTL:** 3600 (or default)

**Record Type 3: TXT Record (for SPF)**
- **Name/Host:** `@` or `eufta.in`
- **Type:** `TXT`
- **Value:** `v=spf1 include:resend.com ~all`
- **TTL:** 3600 (or default)

### Step 5: Add DNS Records to Your Domain Provider

**Where to add DNS records:**
- If your domain is registered with: **GoDaddy, Namecheap, Cloudflare, etc.**
- Go to your domain registrar's DNS management page
- Look for "DNS Settings", "DNS Management", or "Zone Editor"

**How to add:**
1. Find the section to add DNS records
2. Add each record Resend provided:
   - Click "Add Record" or "+"
   - Select the record type (TXT or CNAME)
   - Enter the Name/Host value
   - Enter the Value/Content
   - Set TTL (usually 3600 or default)
   - Save

### Step 6: Wait for DNS Propagation
- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most providers
- Resend will automatically check and verify

### Step 7: Verify in Resend
1. Go back to Resend → Domains
2. You'll see `eufta.in` with status:
   - ⏳ **"Pending"** - DNS records not yet detected
   - ✅ **"Verified"** - Domain is ready to use!
   - ❌ **"Failed"** - Check DNS records again

### Step 8: Test Email Sending
Once verified:
1. Update Vercel environment variable:
   - `RESEND_FROM_EMAIL` = `info@eufta.in`
2. Redeploy your Vercel project
3. Test by submitting the PDF form on your website
4. Emails will now send from `info@eufta.in` ✅

## Common Issues & Solutions

### Issue: DNS records not showing up
**Solution:**
- Wait 15-30 minutes after adding records
- Use a DNS checker tool: https://dnschecker.org
- Make sure you're adding records to the correct domain (eufta.in, not www.eufta.in)

### Issue: "Verification Failed"
**Solution:**
- Double-check the exact values Resend provided
- Make sure there are no extra spaces in DNS record values
- Ensure TTL is set correctly
- Try removing and re-adding the records

### Issue: Can't find DNS settings
**Solution:**
- Check your domain registrar's help documentation
- Common locations:
  - GoDaddy: My Products → DNS
  - Namecheap: Domain List → Manage → Advanced DNS
  - Cloudflare: DNS → Records
  - Google Domains: DNS → Custom records

## Quick Reference

**Resend Domains Page:** https://resend.com/domains  
**DNS Checker:** https://dnschecker.org  
**Your Domain:** eufta.in  
**Email Address:** info@eufta.in

## Alternative: Use Test Domain (Temporary)

If domain verification takes too long:
1. In Vercel, set `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
2. This works immediately without verification
3. You can switch to `info@eufta.in` later once verified

---

**Need Help?**
- Resend Support: https://resend.com/support
- Resend Documentation: https://resend.com/docs
