# TradePass Academy Website

Official website for TradePass Academy, publisher of premium Red Seal exam prep study guides for Canadian apprentices.

## Structure

```
├── index.html              All page content (text, sections, links, images)
├── css/
│   └── style.css           All styling (colors, fonts, spacing, layout, animations)
├── js/
│   └── main.js             All behaviour (mobile menu, scroll animations, forms)
├── assets/
│   ├── logo-shield.png     TradePass Academy shield mark (transparent background)
│   ├── cover-403a.jpg      Red Seal Carpenter 403A book cover
│   └── inside-403a.jpg     Interior spread photo for the "Inside Every Guide" section
└── README.md
```

## What to edit, and where

| You want to change... | Edit this file | Tip |
|---|---|---|
| Text, headlines, book titles, prices, links | `index.html` | Sections are labelled with comments like `<!-- ======= Hero ======= -->` |
| Contact email, phone, address | `index.html` | Search for `support@` in the footer (two spots: the link and the visible text) |
| Amazon links | `index.html` | Search for `amazon` or `a.co` |
| Brand colors | `css/style.css` | Edit the values in `:root` at the top (e.g. `--red:#C62828`) |
| Fonts, sizes, spacing | `css/style.css` | Sections are labelled with comments like `/* Hero */` |
| Menu behaviour, animations, form messages | `js/main.js` | Short, commented file |
| Images | `assets/` | Replace a file keeping the same name, or add a new one and reference it in `index.html` |

## Upload to your existing GitHub repository

1. On github.com, open your repository and click **Add file → Upload files**.
2. Drag in `index.html` and the `css`, `js` and `assets` folders together (dragging the folders keeps the structure intact).
3. Commit. GitHub replaces the old `index.html`; the new folders are added.
4. Delete any leftover files from the old site (old stylesheets, scripts, images) so nothing conflicts.
5. If the repository is connected to Vercel, the site redeploys automatically within a minute or two.

## Publish on GitHub Pages (if not using Vercel)

Settings → Pages → Source: "Deploy from a branch" → `main` branch, `/ (root)` folder → Save.

## Launching a new book

1. In `index.html`, find the book's coming soon card in the Study Guides section.
2. Replace it with a featured card like the 403A one (copy that block), swap in a real cover photo (`assets/cover-XXXX.jpg`) and the Amazon link.
3. Update the footer list link for that trade.

## Forms

The notify and newsletter forms show an on-page confirmation only. To collect real emails, connect a provider such as Formspree, Mailchimp or ConvertKit by pointing each `<form>` at your endpoint.
