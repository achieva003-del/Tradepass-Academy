# TradePass Academy Website

Official website for TradePass Academy, publisher of premium Red Seal exam prep
study guides for Canadian apprentices.

## Structure

```
├── index.html                        Home page (hero, guides + search, resources, why, updates, newsletter)
├── updates.html                      Academy updates / news articles ("Read more" targets)
├── privacy.html                      Privacy Policy
├── terms.html                        Terms of Service
├── guides/
│   └── carpenter-403a.html           Dedicated landing page for the 403A book
├── resources/                        QR-ready free resource pages
│   ├── flashcards.html               Interactive flip cards
│   ├── practice-tests.html           5-question sample test with instant scoring
│   ├── study-planner.html            8-week plan (printable)
│   ├── formula-sheets.html           Trade math reference (printable)
│   ├── exam-tips.html                Exam strategy article
│   └── blueprint-checklists.html     Study coverage checklist (printable)
├── css/style.css                     All styling (edit colors in :root at the top)
├── js/main.js                        All behaviour (menu, scroll spy, search, forms, back-to-top)
├── assets/                           logo-shield.png, cover-403a.jpg, inside-403a.jpg
├── robots.txt                        Search engine access + sitemap pointer
├── sitemap.xml                       All page URLs for Google
└── README.md
```

## What to edit, and where

| You want to change... | Edit this | Tip |
|---|---|---|
| Text, headlines, links | the page's .html file | Sections labelled with comments like `<!-- ======= Hero ======= -->` |
| Contact email | search `tradepassacademy.ca@gmail.com` | Appears in every footer + privacy/terms + index schema. Swap to support@tradepassacademy.ca once domain email exists |
| Amazon links | search `a.co` | Home page, guide page, footers |
| ISBN & page count | `guides/carpenter-403a.html` | Search `EDIT HERE`, fill values from your Amazon listing, remove the comment wrapper |
| Book table of contents | `guides/carpenter-403a.html` | Adjust the ten `toc-item` blocks to match the printed book exactly |
| Brand colors / radius / shadows | `css/style.css` | Everything lives in `:root` at the top |
| Search keywords per guide | `index.html` | Each card's `data-search` attribute — add any words people might type |
| News articles | `updates.html` | Add new `<article class="article" id="...">` blocks at the top; link them from the home Updates cards |
| Social links | `index.html` footer | Currently commented out — uncomment and add real URLs once accounts exist |

## Going live on your custom domain

When tradepassacademy.ca is connected, search the whole project for
`tradepass-academy.vercel.app` and replace with `tradepassacademy.ca`
(canonical tags, Open Graph URLs, structured data, robots.txt, sitemap.xml).

## Upload to your existing GitHub repository

1. On github.com, open your repository → **Add file → Upload files**.
2. Drag in everything inside this folder together (dragging folders keeps the structure).
3. Commit. **Delete leftover files from the old site** so nothing conflicts.
4. Vercel redeploys automatically within a minute or two.

## Launching a new book

1. `index.html`: replace the trade's coming-soon card with a featured card like the 403A one; add the real cover to `assets/` and set the Amazon link and `data-search` keywords.
2. Duplicate `guides/carpenter-403a.html` → `guides/<trade>.html`, update cover, copy, TOC, FAQ, spec grid, canonical/OG URLs and the JSON-LD block.
3. Update the footer Study Guides list (all pages) and add the new URL to `sitemap.xml`.

## Forms (newsletter + notify lists)

Forms currently show an on-page confirmation only — no emails are stored yet.
To collect real subscribers with your Gmail address:

1. Create a free **Formspree** (or Mailchimp/ConvertKit/Buttondown) account with tradepassacademy.ca@gmail.com.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. On each `<form>`, add `action="https://formspree.io/f/abcdwxyz" method="POST"` and add `name="email"` to the input.
4. In `js/main.js`, the front-end confirmation block can then be removed so the form actually submits.

The newsletter is already structured for the standard automation sequence
(welcome email, new book announcements, blueprint updates, free resources,
promotions) — set those up inside your email provider once connected.
