# Analytics Setup Guide for eufta.in

## How to View Traffic and Visits

### Option 1: Vercel Analytics (✅ Already Installed - Easiest!)

**What you get:**
- Page views
- Unique visitors
- Top pages
- Referrers (where traffic comes from)
- Countries
- Devices (mobile/desktop)
- Real-time visitor count

**How to view:**
1. Go to your Vercel dashboard: https://vercel.com
2. Select your project: `eufta-website`
3. Click on **"Analytics"** in the top navigation
4. You'll see:
   - **Overview**: Total page views, visitors, bounce rate
   - **Top Pages**: Which pages get the most traffic
   - **Referrers**: Where visitors come from (Google, direct, etc.)
   - **Countries**: Geographic distribution
   - **Devices**: Mobile vs Desktop breakdown

**Note:** Vercel Analytics is now installed in your code. Data will start collecting immediately after the next deployment.

---

### Option 2: Google Analytics 4 (More Detailed)

**What you get:**
- Everything Vercel provides, plus:
- User behavior flow
- Conversion tracking
- Custom events
- Audience demographics
- E-commerce tracking
- Advanced segmentation

**Setup Steps:**

1. **Create Google Analytics Account:**
   - Go to: https://analytics.google.com
   - Sign in with your Google account
   - Click "Start measuring"
   - Create an account (e.g., "eufta.in")
   - Create a property (e.g., "eufta.in Website")
   - Select "Web" as platform
   - Enter website URL: `https://www.eufta.in`
   - Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)

2. **Add to Your Website:**
   - I've created a GoogleAnalytics component
   - Add your Measurement ID to Vercel environment variables:
     - Variable name: `NEXT_PUBLIC_GA_ID`
     - Value: `G-XXXXXXXXXX` (your actual ID)
   - Then I can integrate it into your layout

3. **View Analytics:**
   - Go to: https://analytics.google.com
   - Select your property
   - View real-time visitors, reports, and insights

---

### Option 3: Vercel Web Analytics (Alternative)

**What you get:**
- Similar to Vercel Analytics but with more features
- Available on Pro plan or as add-on

**Setup:**
1. Go to Vercel → Project → Settings → Analytics
2. Enable "Web Analytics"
3. View in Analytics tab

---

## Recommended Setup

**For now (easiest):**
- ✅ **Vercel Analytics** - Already installed! Just view in Vercel dashboard
- Data starts collecting after next deployment

**For advanced tracking:**
- Add **Google Analytics 4** for detailed insights
- Requires Google Analytics account setup

---

## Quick Access Links

- **Vercel Analytics**: https://vercel.com → Your Project → Analytics
- **Google Analytics**: https://analytics.google.com
- **Your Website**: https://www.eufta.in

---

## What Metrics to Track

**Key Metrics:**
- **Page Views**: Total visits to your site
- **Unique Visitors**: Individual users
- **Bounce Rate**: Visitors who leave immediately
- **Top Pages**: Most popular content
- **Referrers**: Where traffic comes from (SEO, direct, social)
- **Countries**: Geographic distribution
- **PDF Downloads**: Track via form submissions (already tracked via Resend emails)

**Conversion Metrics:**
- PDF form submissions (tracked via email notifications)
- Calculator usage (can add event tracking)
- Page engagement time

---

## Next Steps

1. **Deploy the Vercel Analytics update** (I've already added it to your code)
2. **View analytics in Vercel dashboard** after deployment
3. **Optional**: Set up Google Analytics for more detailed insights
