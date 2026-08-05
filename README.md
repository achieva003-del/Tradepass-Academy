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

## QR Resource System (companion hubs)

Every book's QR code points to its own hub — never to the homepage:

| Trade | QR / hub URL | Also works |
|---|---|---|
| Construction Electrician | https://tradepass-academy.vercel.app/309A | /flashcards/309A · /quiz/309A · /updates/309A |
| Red Seal Carpenter | https://tradepass-academy.vercel.app/403A | /flashcards/403A · /quiz/403A · /updates/403A |
| Heavy Equipment Technician | https://tradepass-academy.vercel.app/421A | /updates/421A |
| Industrial Electrician | https://tradepass-academy.vercel.app/442A | /updates/442A |

`vercel.json` makes the clean URLs work (do not delete it). The nested
/flashcards/309A style URLs are rewrites to the flat files
(flashcards-309A.html etc.), so everything stays one-folder simple.

### How each hub is assembled
- Hub page: `309A.html` — downloads, tools, updates link, error report link, newsletter.
- Flashcards: `flashcards-309A.html` reads `flashcards-309A.json`.
- Quiz: `quiz-309A.html` reads `quiz-309A.json` (25, 50 or 100 questions — the
  page adapts to however many the JSON contains).
- Updates: `updates-309A.html` — four sections plus the Report an Error form.
- PDFs: the four `TradePass-309A-*.pdf` files at the root.

### Adding or growing content (no redesign ever needed)
- More flashcards/questions: edit the trade's JSON file, upload, done.
- New PDF ready: upload the PDF, then in the trade's hub page replace the
  `<span class="soon-pill">Coming soon</span>` for that card with a Download
  button (copy one from 309A.html).
- New trade (e.g. 310S): copy 309A.html, flashcards-309A.html, quiz-309A.html,
  updates-309A.html; rename 309A → 310S inside each (search-and-replace);
  create the two JSON files; add three rewrite lines in vercel.json; add the
  URLs to sitemap.xml.

### Generating the printed QR codes
Use any reputable QR generator (e.g. Canva, Adobe Express, or
qr-code-generator.com), choose "URL", paste the hub URL exactly
(https://tradepass-academy.vercel.app/309A), download as SVG or 300-DPI PNG,
black on white, and place it in the book with the caption:
"Scan for your exclusive companion resources." Print at 2 cm or larger and
test-scan a printed proof before publishing. When the custom domain goes
live, regenerate the QR codes with the new URLs before the next printing.

### Report an Error form
Shows an on-page confirmation only until connected. To receive reports by
email, create a Formspree form and add
`action="https://formspree.io/f/YOUR_ID" method="POST"` to the form tag in
each updates-XXXX.html (marked with an EDIT HERE comment).
