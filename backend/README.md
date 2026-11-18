# Campus Events API (Sprint 8)

Express REST API that serves campus events as JSON. Events are stored in MongoDB (Atlas) with Mongoose, so they stay after the server restarts.

- **Student:** Fadime Kovalık — 2321032006

## Run

```bash
cd backend
npm install
cp .env.example .env     # PowerShell: Copy-Item .env.example .env
```

Open `.env` and put your own MongoDB connection string into `MONGODB_URI` (the database name `kampus` goes at the end). Then:

```bash
npm run seed    # deletes old events and adds 6 sample events
npm run dev     # http://localhost:3000
```

## Environment variables

| Variable | Purpose | Example |
|---|---|---|
| `PORT` | Port the server listens on | `3000` |
| `MONGODB_URI` | MongoDB connection string (never commit the real one) | `mongodb://127.0.0.1:27017/kampus` |

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the server and restarts it when a file changes |
| `npm start` | Starts the server |
| `npm run seed` | Empties the `events` collection and inserts 6 events (always 6, even if run twice) |

## REST Contract

| Method | Endpoint | Purpose | Success | Error | Status |
|---|---|---|---|---|---|
| GET | /health | Check that the server is running | 200 | — | Done |
| GET | /events | List events (optional `?category=`) | 200 | — | Done |
| GET | /events/:id | Get one event by MongoDB `_id` | 200 | 404 | Done |
| POST | /events | Create an event | 201 | 400 | Done |
| PATCH | /events/:id | Update an event | 200 | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Delete an event | 204 | 404 | Sprint 9 |

An invalid or unknown `_id` returns `404`, not `500`. Invalid body data returns `400`.

### Error format

```json
{ "error": { "message": "Event not found" } }
```

### Event schema

| Field | Rule |
|---|---|
| `title` | required, trimmed, 3 to 100 characters |
| `category` | required, one of `Seminar`, `Workshop`, `Talk`, `Competition` |
| `date` | required |
| `capacity` | number, minimum 0, default 0 |
| `time`, `location`, `description` | optional, trimmed; description at most 500 characters |
| `createdAt`, `updatedAt` | added by Mongoose (`timestamps`) |

### POST /events body

```json
{
  "title": "Git Workshop",
  "category": "Workshop",
  "date": "2026-12-01",
  "time": "14:00",
  "location": "Computer Lab 1",
  "capacity": 30,
  "description": "First steps with Git and GitHub."
}
```

## Structure

```
backend/
  src/
    config/database.js               Connects to MongoDB using MONGODB_URI
    models/event-model.js            Event schema and model
    data/seed-events.js              The 6 sample events
    seed.js                          npm run seed
    app.js                           Express app, middleware, error handler
    server.js                        Connects the database, then starts the server
    routes/event-routes.js           Which address goes to which function
    controllers/event-controller.js  Reads and writes events with the Event model
  requests/kampus-api.json           Postman collection (6 requests)
  .env.example
  .gitignore
  package.json
  README.md
```