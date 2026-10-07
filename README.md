**Live URL:** https://kampus-etkinlik-gamma.vercel.app/index.html

# Campus Events

A web application where campus seminars, workshops and talks are listed, viewed, added and updated. Built step by step, one sprint per week.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming

## Sprint 3 — JavaScript and DOM (current)

The pages are now generated from data: events live in one place (`data.js`), and JavaScript builds the cards, search, detail page and form messages. No `localStorage`, no frameworks, no jQuery; data is not saved yet.

| File | Content |
| --- | --- |
| `sprint3/js/data.js` | Array of 6 events (`id`, `title`, `category`, `date`, `time`, `location`, `description`, `capacity`) and date helpers |
| `sprint3/js/event-list.js` | Creates cards from data; home page shows the 2 nearest events (`data-limit`); list page has search + category filter |
| `sprint3/js/event-detail.js` | Reads `?id=` from the address and shows the right event, or an error box |
| `sprint3/js/event-form.js` | Add and update forms: validation, error messages, success message with the created object |
| `sprint3/index.html` | Introduction, campus image, two upcoming events (generated) |
| `sprint3/etkinlikler.html` | Search box, category select, result line, all events (generated) |
| `sprint3/etkinlik-detay.html` | Event details by id: poster, details, description, update button |
| `sprint3/etkinlik-ekle.html` | New event form with its own validation messages |
| `sprint3/etkinlik-guncelle.html` | Same form, filled with the event selected by `?id=` |

### How to run

Modules do not work with `file://`. Open the project with the VS Code **Live Server** extension (right click `index.html` → Open with Live Server), for example `http://127.0.0.1:5500/sprint3/`.

### Notes

- Each page loads only its own module with `<script type="module">`; `data.js` is imported by the others.
- The menu has 3 links (Home, Events, Add); the update page is reached from the event detail page.
- Dates are stored as `DD-MM-YYYY` and shown as "October 12, 2026".
- Deployed on Vercel (Framework: Other, Root Directory: `sprint3`).

## Sprint 2 — CSS and Responsive Design

Styled with `sprint2/css/2321032006.css`: `--no: 2321032006`, `--ton` = 46, font Courier New (last digit 6). Tables became cards, pages work on phones.

## Sprint 1 — HTML and Git

Pure HTML skeleton (no CSS, no JavaScript), kept in `sprint1/` and tagged `sprint-01`.

## Project structure

```
kampus-etkinlik/
  sprint1/
  sprint2/
  sprint3/
    css/
      2321032006.css
    js/
      data.js
      event-list.js
      event-detail.js
      event-form.js
    index.html
    etkinlikler.html
    etkinlik-detay.html
    etkinlik-ekle.html
    etkinlik-guncelle.html
    kampus-genel.jpg
    career-days.jpg
  .gitignore
  README.md
```