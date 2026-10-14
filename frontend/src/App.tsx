import "./App.css";
import { useEffect, useState } from "react";
import { categoryList, events } from "./data/events";
import type { CampusEvent, Category } from "./types/campus-event";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";

type PageName = "home" | "events" | "detail" | "add" | "update";

const menuItems: { page: PageName; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "events", label: "Events" },
  { page: "add", label: "Add" },
];

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  const upcoming = [...events]
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))
    .slice(0, 2);
  const categories = [...new Set(events.map((e) => e.category))];
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  const titles: Record<PageName, string> = {
    home: "Kampus-Etkinlik",
    events: "Event List",
    detail: selected ? selected.title : "Event not found",
    add: "Add Event",
    update: "Update Event",
  };
  const title = titles[page];

  useEffect(() => {
    document.title = `Campus Events — ${title}`;
  }, [title]);

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
    window.scrollTo(0, 0);
  }

  function renderCard(event: CampusEvent) {
    return (
      <article key={event.id}>
        <h3>{event.title}</h3>
        <p>
          {event.category} · <time dateTime={event.date}>{formatDate(event.date)}</time>
        </p>
        <p>{event.location}</p>
        <p>Quota: {event.capacity} people</p>
        <p>
          <a href="#" onClick={(e) => { e.preventDefault(); go("detail", event.id); }}>
            View details →
          </a>
        </p>
      </article>
    );
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.page}
              href="#"
              aria-current={page === item.page ? "page" : undefined}
              onClick={(e) => { e.preventDefault(); go(item.page); }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {page === "home" && (
          <>
            <section>
              <h2>Welcome to the Campus!</h2>
              <p>You can follow all seminars, workshops, and career events at our university through this platform.</p>
              <p>Use the menu above to announce a new event or browse upcoming ones.</p>
              <figure>
                <img src="/kampus-genel.jpg" alt="SDU Campus" />
              </figure>
            </section>
            <section>
              <h2>Upcoming Events</h2>
              <div className="cards">{upcoming.map(renderCard)}</div>
              <p>
                <button type="button" onClick={() => go("events")}>See all events</button>
              </p>
            </section>
          </>
        )}

        {page === "events" && (
          <section>
            <h2>All Campus Events</h2>
            <form className="filter" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="search">Search events</label>
                <input
                  id="search"
                  type="search"
                  placeholder="e.g. workshop, career"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category-filter">Category</label>
                <select
                  id="category-filter"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category | "")}
                >
                  <option value="">All</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </form>
            <p id="result" role="status">
              {filtered.length === 0
                ? "No events found matching your search."
                : `${filtered.length} ${filtered.length === 1 ? "event" : "events"} listed.`}
            </p>
            <div className="cards">{filtered.map(renderCard)}</div>
          </section>
        )}

        {page === "detail" && !selected && (
          <div>
            <div className="message error" role="alert">
              This event does not exist. Please choose one from the list.
            </div>
            <p>
              <button type="button" onClick={() => go("events")}>← Back to Events</button>
            </p>
          </div>
        )}

        {page === "detail" && selected && (
          <article className={selected.image ? "detail" : "detail no-image"}>
            {selected.image && (
              <figure>
                <img
                  src={selected.image}
                  alt={`${selected.title} poster: ${formatDate(selected.date)}, ${selected.time}, ${selected.location}`}
                />
                <figcaption>{selected.title} event poster</figcaption>
              </figure>
            )}
            <div>
              <h2>Event Details</h2>
              <dl>
                <dt>Date</dt>
                <dd>
                  <time dateTime={`${selected.date}T${selected.time}`}>
                    {formatDate(selected.date)}, {selected.time}
                  </time>
                </dd>
                <dt>Location</dt>
                <dd>{selected.location}</dd>
                <dt>Category</dt>
                <dd>{selected.category}</dd>
                <dt>Quota</dt>
                <dd>{selected.capacity} people</dd>
              </dl>
              <h2>Description</h2>
              <p>{selected.description}</p>
              <p className="actions">
                <button type="button" onClick={() => go("events")}>← Back to Events</button>
                <button type="button" onClick={() => go("update", selected.id)}>Update this event</button>
              </p>
            </div>
          </article>
        )}

        {(page === "add" || page === "update") && (
          <>
            <p>In this sprint the form is only a view; nothing is saved.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="eventName">Event Name *</label>
                <input id="eventName" type="text" maxLength={80} placeholder="e.g. Career Days" required />
              </div>
              <div>
                <label htmlFor="category">Category *</label>
                <select id="category" defaultValue="" required>
                  <option value="">Select...</option>
                  {categoryList.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date">Date *</label>
                <input id="date" type="date" required />
              </div>
              <div>
                <label htmlFor="time">Time *</label>
                <input id="time" type="time" required />
              </div>
              <div>
                <label htmlFor="location">Location *</label>
                <input id="location" type="text" placeholder="e.g. Lecture Hall B1" required />
              </div>
              <div>
                <label htmlFor="quota">Quota</label>
                <input id="quota" type="number" min={1} max={1000} />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" rows={5} />
              </div>
              <button type="submit">{page === "add" ? "Save" : "Update"}</button>
            </form>
          </>
        )}
      </main>

      <footer>
        <p>Fadime Kovalık · 2026</p>
      </footer>
    </>
  );
}

export default App;