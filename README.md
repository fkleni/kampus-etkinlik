# Campus Events — Sprint 1

The **HTML skeleton** of a web application where campus seminars, workshops and talks are listed, viewed, added, updated and deleted.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming, Sprint 1 (HTML and Git)
- **Live URL:** https://kampus-etkinlik-gamma.vercel.app/index.html

## Pages completed in this sprint

| File | Content |
| --- | --- |
| `sprint1/index.html` | Introduction to the app, two upcoming events, links to the other pages |
| `sprint1/etkinlikler.html` | Event list (each event in its own cell: name, category · date, link) |
| `sprint1/etkinlik-detay.html` | Single event: poster with caption, key facts (date, location, quota), description |
| `sprint1/etkinlik-ekle.html` | New event form (name, category, date, time, location, quota, description) |
| `sprint1/etkinlik-guncelle.html` | Same form, fields pre-filled with `value`; button says "Update" |
| `sprint1/etkinlik-sil.html` | Extra page: list of events with a delete button for each |

## Project structure

```
kampus-etkinlik/
  sprint1/
    index.html
    etkinlikler.html
    etkinlik-detay.html
    etkinlik-ekle.html
    etkinlik-guncelle.html
    etkinlik-sil.html
    kampus-genel.jpg
  .gitignore
  README.md
```

## Notes

- Pure HTML only: no CSS, no JavaScript, no data saving in this sprint.
- Semantic tags are used (`header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `footer`, `time`, `dl`).
- Every page has a single `h1` and a working navigation menu with no broken links.
- Every form field has a visible `label`, and `required` validation works in the browser.
- File names contain no Turkish characters or spaces, so links do not break.
- Deployed on Vercel (Framework: Other, Root Directory: `sprint1`).