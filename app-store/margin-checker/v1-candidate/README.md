# Margin Checker v1: native iOS candidate

**Status: development candidate only. No App Store Connect record, signed build, TestFlight upload, or submission. No ads, IAP, or analytics.**

## Included
- Corrected source `index.html`, hash-identical web payload `www/index.html`.
- Capacitor 6 scaffold with `@capacitor/core`, `@capacitor/cli`, and `@capacitor/ios`.
- Browser-safe saved-dish rendering, FDA response rendering, and restoration of target food-cost and daily servings.
- Privacy and support links to the public site (URLs require live HTTP verification).
- Node source smoke tests, run with `npm test`.

## Mac/Xcode release sequence
1. Copy this whole folder to a Mac with a compatible Xcode installation.
2. `npm install`, then `npm test`.
3. `npx cap add ios`, open the project with `npx cap open ios`.
4. Install the approved app icon catalog from the Drive Margin Checker folder.
5. Set signing team `85C3ZQ4FA2`, planned bundle ID `com.fullstackassets.marginchecker`, version 1.0.0, build 1.
6. QA on a physical iPhone: sample recipe, saved targets/servings, recall online/offline, no ads, cross-product links, accessibility, real-device screenshots.
7. Verify hosted privacy and support URLs, Apple agreement, team, copyright holder, and bundle availability.
8. Create App Store Connect record only when separately authorized; TestFlight and submission are separate release gates.

## Reconciliation
The Drive source and scaffold are earlier drafts. This candidate is proposed as the next canonical version **after** device acceptance. Do not silently overwrite Drive or treat the Drive source as already updated.
