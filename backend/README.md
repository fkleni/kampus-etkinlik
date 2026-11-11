# Campus Events API (Sprint 7)

Express REST API that serves campus events as JSON. Data is kept in memory, so events added with POST are lost when the server restarts.

- **Student:** Fadime Kovalık — 2321032006

## Run

```bash
cd backend
npm install
npm run dev
```

The API runs at http://localhost:3000. The port comes from the `PORT` variable in `.env`. Create your `.env` from the example file first:

```bash
cp .env.example .env
```

On Windows PowerShell use `Copy-Item .env.example .env`.

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `PORT` | Port the server listens on | 3000 |

## REST Contract

| Method | Endpoint | Purpose | Success | Error | Status |
|---|---|---|---|---|---|
| GET | /health | Check that the server is running | 200 | — | This sprint |
| GET | /events | List events (optional `?category=`) | 200 | — | This sprint |
| GET | /events/:id | Get one event | 200 | 404 | This sprint |
| POST | /events | Create an event | 201 | 400 | This sprint |
| PATCH | /events/:id | Update an event | 200 | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Delete an event | 204 | 404 | Sprint 9 |

### Status codes

- `200` OK
- `201` Created
- `204` No Content
- `400` Missing or invalid data
- `404` Not found

### Error format

All errors use the same shape:

```json
{ "error": { "message": "Event not found" } }
```

### GET /health response

```json
{
  "status": "ok",
  "time": "2026-11-11T09:46:43.247Z",
  "student": "2321032006"
}
```

### POST /events body

`title`, `category` and `date` are required. The other fields are optional.

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
    app.js                           Express app and middleware
    server.js                        Reads .env and starts the server
    routes/event-routes.js           Which address goes to which function
    controllers/event-controller.js  Handles the request and sends the response
    data/events.js                   In-memory events
  requests/kampus-api.json           Postman collection (6 requests)
  .env.example
  .gitignore
  package.json
  README.md
```