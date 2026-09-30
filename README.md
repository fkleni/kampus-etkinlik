# Campus Events

A web application where campus seminars, workshops and talks are listed, viewed, added, updated and deleted. Built step by step, one sprint per week.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming
- **Live URL:** https://kampus-etkinlik-gamma.vercel.app/index.html

## Sprint 2 — CSS and Responsive Design (current)

Sprint 1's HTML was kept intact and styled with CSS. The pages work on phones and on desktop (mobile first).

| File | Content |
| --- | --- |
| `sprint2/css/2321032006.css` | All styles; colors and font come from the student number |
| `sprint2/index.html` | Introduction, campus image, two upcoming events as cards |
| `sprint2/etkinlikler.html` | All events as cards (one column on phones, several on wide screens) |
| `sprint2/etkinlik-detay.html` | Framed event poster with caption on the left, details (`dl`) on the right; stacked on phones |
| `sprint2/etkinlik-ekle.html` | New event form, labels above fields, invalid fields turn red |
| `sprint2/etkinlik-guncelle.html` | Same form with pre-filled values |
| `sprint2/etkinlik-sil.html` | Extra page: event cards with a delete button |

### Student number design

- `--no: 2321032006`
- `--ton: mod(2321032006, 360)` = **46**, so the palette is built from `hsl(46 ...)`
- Last digit **6** → font: **Courier New**

### Notes

- Sprint 1 tables became `section > article` cards using `display: grid`.
- All colors and spacing in the CSS use `var(--...)` variables.
- `viewport` meta tag is in every page; no horizontal scrolling on phones.
- Buttons and links are at least 44px tall for touch.
- Images (`kampus-genel.jpg`, `career-days.jpg`) scale down with the screen; the event poster has a border.
- Deployed on Vercel (Framework: Other, Root Directory: `sprint2`).

## Sprint 1 — HTML and Git

Pure HTML skeleton of the same pages (no CSS, no JavaScript), kept in `sprint1/` and tagged `sprint-01`.

## Project structure

```
kampus-etkinlik/
  sprint1/
  sprint2/
    css/
      2321032006.css
    index.html
    etkinlikler.html
    etkinlik-detay.html
    etkinlik-ekle.html
    etkinlik-guncelle.html
    etkinlik-sil.html
    kampus-genel.jpg
    career-days.jpg
  .gitignore
  README.md
```