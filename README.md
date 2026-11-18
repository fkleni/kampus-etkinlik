**Live URL:** https://fadimekovalik-frontend.vercel.app

# Campus Events

A web application where campus seminars, workshops and talks are listed, viewed, added, updated and deleted. Built step by step, one sprint per week.

- **Student:** Fadime Kovalık — 2321032006
- **Course:** Web Technologies and Programming

## Sprint 8 — MongoDB and Mongoose (current)

The events are now stored in MongoDB Atlas instead of an array in memory. The addresses of the API do not change; the controller uses the `Event` model (`find`, `findById`, `create`). The connection string comes from `MONGODB_URI` in `backend/.env` (not in the repo). `npm run seed` fills the database with 6 events. The frontend does not change. Tagged `sprint-08`. Details are in [`backend/README.md`](backend/README.md).

```
cd backend
npm install
npm run seed
npm run dev      # http://localhost:3000
```

## Sprint 7 — Express REST API 

A second app, `backend/`, serves the events as JSON with Node and Express (port 3000, data in memory). The frontend does not change in this sprint. Tagged `sprint-07`. Run commands, the REST contract and the folder structure are in [`backend/README.md`](backend/README.md).

```
cd backend
npm install
npm run dev      # http://localhost:3000
```

The backend is not deployed; the Vercel setup of the frontend stays the same.

## Sprint 6 + Midterm — Router, Context and Management

The single page app now has real addresses. `React Router` shows one page per address, `EventsContext` keeps the event list in one place for all pages, and the management pages can add, update and delete events. All forms are controlled and validated. Tagged `frontend`.

### Routes

| Path | Page | What it does |
| --- | --- | --- |
| `/` | `HomePage` | The 2 nearest upcoming events. |
| `/events` | `EventsPage` | All events with search and category filter. |
| `/events/:id` | `EventDetailPage` | One event; shows "Page not found" for an unknown id. |
| `/login` | `LoginPage` | Email and password form with validation (demo, no real login). |
| `/register` | `RegisterPage` | Name, email, password and password confirmation with validation (demo). |
| `/forgot-password` | `ForgotPasswordPage` | Email form with validation (demo). |
| `/admin` | `AdminPage` | Event table with Edit and Delete (asks for confirmation) and a "New event" link. |
| `/admin/new` | `AddEventPage` | Empty event form. |
| `/admin/:id/edit` | `EditEventPage` | Event form filled with the event's data. |
| `*` | `NotFoundPage` | Shown for any other address. |

### Structure

```
main.tsx  BrowserRouter > EventsProvider > App
App       Header, Navigation, Routes (10 routes), Footer   (no state)
```

| File | What it does |
| --- | --- |
| `context/EventsContext.tsx` | `EventsProvider` and the `useEvents` hook: the event list with `addEvent`, `updateEvent` and `deleteEvent`. Every page reads the same list, so a change is visible everywhere. |
| `pages/*.tsx` | The 10 pages. A page reads the address and the context, then gives data to components. |
| `components/layout/Header.tsx`, `Footer.tsx` | Title and footer, without props. |
| `components/layout/Navigation.tsx` | Menu made with `NavLink`; the open page gets `aria-current="page"`. |
| `components/events/EventCard.tsx` | One event card with a `Link` to the detail page. |
| `components/events/EventList.tsx` | One `EventCard` per event, or a message when the list is empty. |
| `components/events/EventFilter.tsx` | Search box and category select. |
| `components/events/EventDetail.tsx` | Draws one event; the page finds it, the component only shows it. |
| `components/forms/EventForm.tsx` | Controlled form used by Add and Update; validates on submit and shows an error under each field. |
| `types/campus-event.ts` | `Category`, `CampusEvent`, `EventFormData` and `EventFormErrors` types. |
| `utils/validate-event.ts` | Pure function: form data in, error object out. |
| `utils/filter-events.ts` | `searchEvents`, `filterByCategory`, `findEventById`. |
| `utils/format-date.ts` | `formatDate`, shared by the card, the detail and the admin table. |
| `vercel.json` | Sends every address to `index.html` so refreshing `/events` or `/admin` does not give a 404. |

Removed in this sprint: `types/page.ts` and the page state, `go()` and button props in `App.tsx`.

### Form rules

| Field | Rule |
| --- | --- |
| Title | At least 3 characters |
| Category | Must be selected |
| Date, time, location | Cannot be empty |
| Capacity | Whole number from 1 to 1000 |
| Description | At least 10 characters |
| Login / Register | Email must contain `@`, password at least 6 characters, both passwords must match |

### How to run

```
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # must finish without errors
npm run preview  # open the built site
```

Deployed on Vercel (Framework Preset: Vite, Root Directory: `frontend`).

## Sprint 5 — React Components

The single `App.tsx` was split into 9 components with typed `props` and callback props. All state stayed in `App` (lifting state up). Tagged `sprint-05`.

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
| `src/App.css` | All styles (Sprint 3 CSS, colors and font come from the student number). |
| `src/data/events.ts` | The 6 typed events. |
| `public/` | Files copied as they are: the event posters and the campus image. |

## Sprint 3 — JavaScript and DOM

Pages generated from data with JavaScript modules (`sprint3/js`). Tagged `sprint-03`.

## Sprint 2 — CSS and Responsive Design

`sprint2/css/2321032006.css`: `--no: 2321032006`, `--ton` = 46, font Courier New. Tagged `sprint-02`.

## Sprint 1 — HTML and Git

Pure HTML in `sprint1/`. Tagged `sprint-01`.