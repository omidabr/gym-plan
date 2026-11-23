# Gym Plan

Personal 3-day gym plan app (PWA).

**Open the app:** https://omidabr.github.io/gym-plan/

---

## 1. Install it on your phone (one time)

You need internet only for this first visit. After that it works offline.

**iPhone / iPad (use Safari, not Chrome)**
1. Open https://omidabr.github.io/gym-plan/ in Safari.
2. Tap the **Share** button (square with an arrow).
3. Tap **Add to Home Screen**, then **Add**.
4. Open the app from the new icon on your Home Screen.

**Android (Chrome)**
1. Open https://omidabr.github.io/gym-plan/ in Chrome.
2. Tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
3. Open the app from the new icon.

**Computer (Chrome / Edge)**
Open the link and click the install icon in the address bar.

## 2. Use it offline

Open the app once with internet so the files are saved on the phone. After that it opens without internet, such as in the gym basement.

## 3. Updating the app (from the GitHub website)

1. Go to https://github.com/omidabr/gym-plan
2. Click the file you want to change (usually `index.html`), then the pencil icon (**Edit**). To replace a file, use **Add file → Upload files** and drop the new one in, with the same name.
3. Click **Commit changes**.
4. Wait about 1 minute. The **Actions** tab shows the Pages build; a green check means it is live.
5. On the phone, open the app **twice** with internet. The first open downloads the new version in the background, and the second open shows it.

To force a clean update, open `sw.js` and change `gym-plan-v1` to `gym-plan-v2`, then commit.

## 4. If something looks wrong

- **Old version still showing:** close the app fully and open it again (twice, with internet).
- **No "Install" option on Android:** open the link in Chrome, not inside another app's browser.
- **Reset everything:** delete the Home Screen icon and install again from step 1. Check first if your workout data is stored only on the phone, as removing the app may erase it.
- **Page not found (404):** in the repo go to **Settings → Pages** and make sure Source is **Deploy from a branch**, branch `main`, folder `/ (root)`.

## Files in this repo

| File | Purpose |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Service worker (offline support) |
| `manifest.webmanifest` | Makes it installable (name, colours, icons) |
| `icon-192.png`, `icon-512.png` | App icons |
| `apple-touch-icon.png` | Home Screen icon for iPhone |
