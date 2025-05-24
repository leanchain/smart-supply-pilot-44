# Google Analytics Setup Guide

This project has been configured with Google Analytics 4 (GA4) to track website statistics and user interactions.

## Setup Instructions

### 1. Create a Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account or use an existing one
3. Create a new GA4 property for your website
4. Copy the Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder with your actual Measurement ID:
   ```
   VITE_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
   ```

### 3. Deploy with Environment Variables

#### For Netlify:
1. Go to your Netlify site dashboard
2. Navigate to Site settings > Environment variables
3. Add a new variable:
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: Your actual GA4 Measurement ID

#### For Vercel:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add a new variable:
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: Your actual GA4 Measurement ID

#### For other platforms:
Set the environment variable `VITE_GA_MEASUREMENT_ID` with your GA4 Measurement ID.

## What's Being Tracked

The implementation automatically tracks:

### Page Views
- All route changes in the React application
- Page titles and URLs

### Events
- **Button Clicks**: CTA buttons, navigation buttons
- **Form Submissions**: Contact forms, newsletter signups
- **External Links**: Links to external websites (like Calendly)
- **File Downloads**: Any file download links

### Custom Events
You can track custom events using the utility functions in `src/lib/analytics.ts`:

```typescript
import { trackEvent, trackButtonClick, trackFormSubmission } from '@/lib/analytics';

// Track a custom event
trackEvent('video_play', 'engagement', 'hero_video');

// Track button clicks
trackButtonClick('Download Brochure', 'Header');

// Track form submissions
trackFormSubmission('Contact Form');
```

## Privacy Compliance

The implementation:
- Only loads in production or when explicitly configured
- Respects user privacy settings
- Is mentioned in the website's Cookie Policy
- Follows GDPR best practices

## Testing

### Development Mode
In development, Google Analytics will only load if you set the `VITE_GA_MEASUREMENT_ID` environment variable. This prevents development traffic from affecting your analytics.

### Production Mode
In production, Google Analytics will automatically load if the environment variable is set.

### Verify Installation
1. Deploy your site with the environment variable set
2. Visit your website
3. Check Google Analytics Real-time reports to see if traffic is being tracked
4. Use browser developer tools to verify the `gtag` script is loaded

## Files Modified

- `src/lib/analytics.ts` - Analytics utility functions
- `src/components/GoogleAnalytics.tsx` - Route tracking component
- `src/App.tsx` - GA initialization
- `src/vite-env.d.ts` - TypeScript environment variable types
- `src/components/Hero.tsx` - Button click tracking
- `src/components/ContactForm.tsx` - Form submission tracking
- `.env.example` - Environment variable template
- `.gitignore` - Exclude environment files

## Troubleshooting

### Analytics Not Working
1. Verify the Measurement ID is correct
2. Check that the environment variable is set in your deployment platform
3. Ensure you're testing on the deployed site, not localhost (unless env var is set)
4. Check browser console for any JavaScript errors

### Events Not Showing
1. Events may take a few minutes to appear in GA4
2. Check the Real-time reports first
3. Verify the event tracking code is being called (use browser dev tools)

## Support

If you need help with Google Analytics setup, refer to:
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
