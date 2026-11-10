A small WebExtension that auto closes the teleport tab (https://teleport.astronomer.cloud/).

How to install unpacked extension in Chrome:

1. Clone this repo
2. Go to [chrome://extensions](chrome://extensions/)
3. At the top right, turn on Developer mode.
4. Click Load unpacked.
5. Find and select the app or extension folder.

How to install in Firefox (also works in Zen):

1. Clone this repo
2. Go to `about:debugging#/runtime/this-firefox`
3. Click Load Temporary Add-on... and select `manifest.json` from the repo.
4. Open `about:addons`, select the extension, and under Permissions turn on access to the Teleport sites (Firefox MV3 does not grant host permissions at install).

Temporary add-ons are removed when the browser restarts. For a permanent install, use the signed
`.xpi` below.

Requires Firefox 140 or later.

## Install for the team (Firefox/Zen, signed)

Each [release](https://github.com/seanmuth/tele-tab-closer/releases/latest) has a signed
`tele-tab-closer-<version>.xpi`. Download it and open it in Firefox/Zen (or drag it onto the window) and
accept the install prompt. The extension then updates itself from
`https://github.com/seanmuth/tele-tab-closer/releases/latest/download/updates.json`.
Then do step 4 above (site access in `about:addons`) once.

## Releasing

1. Bump `version` in `manifest.json` and merge to `main`.
2. Tag it: `git tag -a vX.Y.Z -m "vX.Y.Z" && git push origin vX.Y.Z`.
3. The Release workflow lints, signs the extension as an unlisted add-on on addons.mozilla.org, and
   attaches the signed `.xpi`, `updates.json` and the unsigned zip to a GitHub release.

AMO signs each version once. If the workflow fails after signing, bump the version and tag again.
The workflow needs the repo secrets `WEB_EXT_API_KEY` (JWT issuer) and `WEB_EXT_API_SECRET` (JWT secret).
