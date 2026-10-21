**Live URL:** https://kampus-etkinlik-sprint2-iota.vercel.app/

# Campus Events

A web application where campus seminars, workshops and talks are listed, viewed, added and updated. Built step by step, one sprint per week.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming

## Sprint 5 — React Components (current)

The same site as Sprint 4, but the single `App.tsx` is split into 9 components. Each component has its own file, receives data through typed `props` (`interface`), and reports events to `App` with callback props. All state stays in `App` (lifting state up). The screen is identical to Sprint 4.

```
App  (state: page, selectedId, searchText, category)
 ├─ Header        title, text?
 ├─ Navigation    current, onNavigate
 ├─ main (open page)
 │   ├─ EventList    events, onShowDetail, emptyText?   → EventCard (event, onShowDetail)
 │   ├─ EventFilter  searchText, category, categories, onSearchChange, onCategoryChange
 │   ├─ EventDetail  event, onBack, onEdit
 │   └─ EventForm    onSubmit, submitLabel?
 └─ Footer
```

| File | What it does |
| --- | --- |
| `components/layout/Header.tsx` | Shows the page title and an optional sub text. |
| `components/layout/Navigation.tsx` | Draws the menu and tells `App` which page was clicked (`onNavigate`). |
| `components/layout/Footer.tsx` | Footer without props. |
| `components/events/EventCard.tsx` | One event card; "View details" calls `onShowDetail(id)`. |
| `components/events/EventList.tsx` | Draws one `EventCard` per event, or a message when the list is empty. Used by the home page and the events page. |
| `components/events/EventFilter.tsx` | Search box and category select; values come from props, changes go up with callbacks. |
| `components/events/EventDetail.tsx` | One event with poster, details and the Back / Update buttons. |
| `components/forms/EventForm.tsx` | The form used by both Add and Update pages; `onSubmit` is given by `App`. |
| `types/page.ts` | The `PageName` type. |
| `utils/format-date.ts` | `formatDate`, shared by `EventCard` and `EventDetail`. |

## Sprint 4 — Vite, TypeScript and React

React + TypeScript project in the `frontend` folder: typed data, pure filter functions, state instead of a router. Tagged `sprint-04`.

| File | What it does |
| --- | --- |
| `package.json` | Project name, commands (`dev`, `build`, `preview`) and the list of packages. |
| `package-lock.json` | The exact versions of all installed packages. |
| `node_modules/` | The downloaded packages; it is not sent to GitHub. |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | TypeScript settings for the app and for the Vite config. |
| `vite.config.ts` | Vite settings, including the React plugin. |
| `index.html` | The only HTML page; it contains an empty `div#root`. |
| `src/main.tsx` | Starts React and draws `App` into `div#root`. |
| `src/App.tsx` | The main component: keeps the state and puts the components together. |
| `src/App.css` | All styles (Sprint 3 CSS, colors and font come from the student number). |
| `src/index.css` | Global styles; empty. |
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

Deployed on Vercel (Framework Preset: Vite, Root Directory: `frontend`).

## Sprint 3 — JavaScript and DOM

Pages generated from data with JavaScript modules (`sprint3/js`). Tagged `sprint-03`.

## Sprint 2 — CSS and Responsive Design

`sprint2/css/2321032006.css`: `--no: 2321032006`, `--ton` = 46, font Courier New. Tagged `sprint-02`.

## Sprint 1 — HTML and Git

Pure HTML in `sprint1/`. Tagged `sprint-01`.