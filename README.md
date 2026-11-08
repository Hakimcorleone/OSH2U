# OSH2U website and trainer app (prototype)

A static site with no build step and no backend. Everything a visitor does (enquiries, the trainer app, sample data) stays in their own browser.

## Deploy on Vercel

1. Make a new repository on GitHub and upload everything in this folder, keeping the folders as they are. `vercel.json` must be at the top level next to `index.html`.
2. On vercel.com choose **Add New › Project**, then import that repository.
3. Framework preset: **Other**. Leave the build command and output directory empty.
4. Deploy. Every push to the main branch deploys again.

To use osh2u.my, open the project's **Settings › Domains**, add the domain, and set the DNS records Vercel shows at your registrar.

## What is in here

| Path | What it is |
|---|---|
| `index.html` | The whole site in one file (fonts and trainer photos are built in) |
| `img/` | Topic photos |
| `favicon.svg`, `robots.txt`, `vercel.json` | Icon, crawler rules and Vercel headers |
| `source/` | The parts `index.html` is built from. Not deployed (see `.vercelignore`) |

## Editing

Edit the files in `source/`, then rebuild:

```
cd source
python3 build.py
```

This rewrites `../index.html`. It needs Python 3 and nothing else. Commit and push to redeploy.

## Before going public

- The site tells search engines not to index it (the robots meta tag in `source/build.py`, the `X-Robots-Tag` header in `vercel.json`, and `robots.txt`). Remove all three when you launch.
- Trainer photos are AI-generated, except the sample profile. Confirm that person's consent before the site is public.
- Fonts are under the SIL Open Font License: Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono and Cormorant Garamond. Topic photos are from Unsplash.
