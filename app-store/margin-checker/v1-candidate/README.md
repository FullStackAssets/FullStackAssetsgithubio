# Margin Checker v1: native iOS candidate

**Status: development candidate only. No App Store Connect record, signed build, TestFlight upload, or submission. No ads, IAP, or analytics.**

## Included
- Corrected source `index.html`, hash-identical web payload `www/index.html`, and the approved 1024×1024 RGB app icon.
- Capacitor 6 scaffold with `@capacitor/core`, `@capacitor/cli`, and `@capacitor/ios`.
- Browser-safe saved-dish rendering, FDA response rendering, and restoration of target food-cost and daily servings.
- Privacy and support links to the public site (URLs require live HTTP verification).
- Node source smoke tests, run with `npm test`.

## Mac/Xcode release sequence
1. Copy this whole folder to a Mac with a compatible Xcode installation.
2. `npm install`, then `npm test`.
3. `npx cap add ios`, then copy `assets/AppIcon-1024.png` to `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` and open the project with `npx cap open ios`.
4. Install the approved app icon catalog from the Drive Margin Checker folder.
5. Set signing team `85C3ZQ4FA2`, planned bundle ID `com.fullstackassets.marginchecker`, version 1.0.0, build 1.
6. QA on a physical iPhone: sample recipe, saved targets/servings, recall online/offline, no ads, cross-product links, accessibility, real-device screenshots.
7. Verify hosted privacy and support URLs, Apple agreement, team, copyright holder, and bundle availability.
8. Create App Store Connect record only when separately authorized; TestFlight and submission are separate release gates.

## Reconciliation
The Drive canonical `index.html` and Capacitor `www/index.html` were synchronized on November 1, 2026 with the newer saved-dish, validation and FDA safety improvements retained and hosted legal-page links added. A pre-link backup is in the same Drive folder. This branch mirrors those bytes, and the updated source ZIP is stored in the Margin Checker Drive folder. The unsigned iOS simulator project has compiled successfully with GitHub Actions macOS 26 / Xcode 26.6; signed real-device build, physical iPhone QA and App Store Connect operations are still pending.
