# Yuya Hirata portfolio

Public site: https://yuya-hoge.github.io/

Static HTML/CSS/JavaScript hosted on GitHub Pages. The white background, Gothic typography and scroll reveals are retained. No build dependencies are required.

## Edit with Pages CMS

1. Open https://app.pagescms.org/ and sign in with GitHub.
2. Install/authorize Pages CMS for **YUYA-hoge.github.io only**.
3. Open `YUYA-hoge / YUYA-hoge.github.io`, branch `main`.
4. Choose **ホームページの文章**. Edit names, profile, skills, career or app summaries and save.
5. GitHub Actions deploys the saved changes to GitHub Pages. Wait for the workflow to finish before refreshing the public page.

`.pages.yml` at the repository root configures the form. Text is stored in `dist/content.json`. The CMS account/authorization is separate from this repository config and must be completed by the repository owner at first sign-in. Never add a GitHub token to the public site.

## Edit directly

Change `dist/content.json` on GitHub or locally. Every field referenced by the page must contain non-empty text. Profile text accepts newlines. Text is displayed as text, not HTML.

After local edits run:

```sh
python3 scripts/render_content.py
python3 -m http.server 4175 --directory dist
```

The deploy workflow runs the same renderer. It embeds the latest CMS text in HTML so the page remains readable without JavaScript; the client also loads the JSON on page load. The render step escapes text and fails on missing/empty fields rather than silently deploying invalid content.

## Assets and content

- `dist/assets/avatar.png`: profile image supplied by the owner.
- App icons: official App Store artwork for Tabe, Oki and Itsu.
- Arrow icon: Bootstrap Icons (MIT), license in `dist/assets/bootstrap-icons-LICENSE.txt`.
- Skill labels summarize the owner's iOS app code and public `bq-agent`, `bigquery-conversational-analytics`, and `expense-tracker` projects; no proficiency ratings or employment years are inferred.
- Typography uses the device's Japanese Gothic fonts. CSS respects reduced-motion preferences.
