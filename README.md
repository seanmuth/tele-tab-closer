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

Temporary add-ons are removed when the browser restarts. For a permanent install, sign the
extension as an unlisted add-on on addons.mozilla.org, or use Firefox Developer Edition/Nightly with
`xpinstall.signatures.required` set to `false` and load the zip from `build.sh`.

Requires Firefox 140 or later.
