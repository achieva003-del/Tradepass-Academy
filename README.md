# TradePass Academy Website

Official website for TradePass Academy, publisher of premium Red Seal exam prep
study guides for Canadian apprentices.

## Flat structure — easy uploads

Every file lives at the top level (no folders), so updating the site on GitHub
is always the same simple move: **Add file → Upload files → drag the files in
→ Commit.** Files with the same name replace the old versions automatically.

| File | What it is |
|---|---|
| index.html | Home page (hero, guides + search, resources, why, updates, newsletter) |
| carpenter-403a.html | Landing page for the Carpenter 403A book |
| flashcards.html, practice-tests.html, study-planner.html, formula-sheets.html, exam-tips.html, blueprint-checklists.html | Free resource pages (QR-code ready) |
| updates.html | News articles ("Read more" targets) |
| privacy.html, terms.html | Legal pages |
| style.css | All styling — brand colors are in `:root` at the top |
| main.js | All behaviour (menu, scroll spy, search, forms, back-to-top) |
| logo-shield.png, cover-403a.jpg, inside-403a.jpg | Images |
| robots.txt, sitemap.xml | For search engines |

## Common edits

- **Contact email:** search `tradepassacademy.ca@gmail.com` (footer of every page + privacy/terms). Swap to support@tradepassacademy.ca once domain email exists.
- **Amazon links:** search `a.co`.
- **ISBN & page count:** in carpenter-403a.html, search `EDIT HERE` and fill in from your Amazon listing.
- **Book table of contents:** carpenter-403a.html — adjust the ten `toc-item` blocks to match the printed book.
- **News:** add new `<article class="article" id="...">` blocks at the top of updates.html.
- **Social links:** commented out in the index.html footer — uncomment when the accounts exist.

## Going live on your custom domain

When tradepassacademy.ca is connected, search every file for
`tradepass-academy.vercel.app` and replace with `tradepassacademy.ca`.

## Launching a new book

1. index.html: replace that trade's coming-soon card with a featured card like the 403A one; upload the real cover image and set the Amazon link.
2. Duplicate carpenter-403a.html → e.g. electrician-309a.html and update cover, copy, TOC, FAQ and URLs.
3. Add the new page to sitemap.xml and the footer lists.

## Forms (newsletter + notify lists)

Forms currently show an on-page confirmation only. To collect real emails:
create a free Formspree account with tradepassacademy.ca@gmail.com, copy your
endpoint (like https://formspree.io/f/abcdwxyz), then on each `<form>` add
`action="https://formspree.io/f/abcdwxyz" method="POST"` and add `name="email"`
to the input field.
