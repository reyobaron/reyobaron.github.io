# Traffic Tracking Setup (Google Analytics 4)

This website is prepared for GA4 in [index.html](index.html).

## 1) Create GA4 property
- Open https://analytics.google.com/
- Create an account/property for your site: https://reyobaron.github.io/
- Copy the Measurement ID (looks like `G-ABC123XYZ9`)

## 2) Paste your Measurement ID
- Open [index.html](index.html)
- Find `G-XXXXXXXXXX` (2 places)
- Replace both with your real Measurement ID

## 3) Publish to GitHub Pages
- Commit and push your changes to the branch used by GitHub Pages.

## 4) Verify tracking is working
- Open your website in a browser.
- In GA4, go to Reports -> Realtime.
- You should see at least one active user (you).

## 5) See where traffic comes from
- Reports -> Acquisition -> Traffic acquisition
  - Check Session source/medium (google/organic, facebook/social, direct/none, referral)
- Reports -> User attributes -> Demographic details
  - Check Country and City

## 6) Track campaign links (recommended)
Use UTM parameters in links you share:

`https://reyobaron.github.io/?utm_source=facebook&utm_medium=social&utm_campaign=summer_offer`

Then GA4 will separate traffic by campaign.

## Notes
- Data in standard reports can take up to 24 hours.
- Realtime reports update within seconds.
- If you use cookie consent, only fire analytics after consent.
