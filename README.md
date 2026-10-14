**Live URL:** https://kampus-etkinlik-gamma.vercel.app/index.html

# Campus Events

A web application where campus seminars, workshops and talks are listed, viewed, added and updated. Built step by step, one sprint per week.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming

## Sprint 4 — Vite, TypeScript and React (current)

The same site, now built with React and TypeScript in the `frontend` folder. Data is typed, filter functions are pure, and the five pages live in one `App.tsx`. The open page and the selected event are kept in state (no React Router yet).

| File | What it does |
| --- | --- |
| `package.json` | Project name, commands (`dev`, `build`, `preview`) and the list of packages. |
| `package-lock.json` | The exact versions of all installed packages. |
| `node_modules/` | The downloaded packages; it is not sent to GitHub. |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | TypeScript settings for the app and for the Vite config. |
| `vite.config.ts` | Vite settings, including the React plugin. |
| `index.html` | The only HTML page; it contains an empty `div#root`. |
| `src/main.tsx` | Starts React and draws `App` into `div#root`. |
| `src/App.tsx` | The main component: all five pages, the menu and the page state. |
| `src/App.css` | All styles (Sprint 3 CSS, colors and font come from the student number). |
| `src/index.css` | Global styles; empty in this sprint. |
| `src/types/campus-event.ts` | The `Category` and `CampusEvent` types. |
| `src/data/events.ts` | The 6 typed events. |
| `src/utils/filter-events.ts` | Pure functions: `searchEvents`, `filterByCategory`, `findEventById`. |
| `public/` | Files copied as they are: the event posters and the campus image. |

### How to run

```
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # must finish without errors
npm run preview  # open the built site
```

### Notes

- Pages: Home (2 nearest events), Events (search + category), Event detail, Add, Update.
- Search and category are state; the filtered list is calculated on every render.
- `useEffect` changes the browser tab title when the page changes.
- Forms are only a view in this sprint; nothing is saved.
- Deployed on Vercel (Framework Preset: Vite, Root Directory: `frontend`).

## Sprint 3 — JavaScript and DOM

Pages generated from data with JavaScript modules (`sprint3/js`): cards, search and category filter, detail by `?id=`, form validation messages. Tagged `sprint-03`.

## Sprint 2 — CSS and Responsive Design

Styled with `sprint2/css/2321032006.css`: `--no: 2321032006`, `--ton` = 46, font Courier New (last digit 6). Tagged `sprint-02`.

## Sprint 1 — HTML and Git

Pure HTML skeleton (no CSS, no JavaScript) in `sprint1/`. Tagged `sprint-01`.

## Project structure

```
kampus-etkinlik/
  sprint1/
  sprint2/
  sprint3/
  frontend/
    public/
    src/
      data/events.ts
      types/campus-event.ts
      utils/filter-events.ts
      App.tsx
      App.css
      index.css
      main.tsx
    index.html
    package.json
    vite.config.ts
  README.md
```