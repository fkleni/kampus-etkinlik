import "./App.css";
import { useEffect, useState } from "react";
import EventDetail from "./components/events/EventDetail";
import EventFilter from "./components/events/EventFilter";
import EventList from "./components/events/EventList";
import EventForm from "./components/forms/EventForm";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import { events } from "./data/events";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  const upcoming = [...events].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)).slice(0, 2);
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
  const showDetail = (id: string) => go("detail", id);

  return (
    <>
      <Header title={title} />
      <Navigation current={page} onNavigate={go} />
      <main>
        {page === "home" && (
          <>
            <section>
              <h2>Welcome to the Campus!</h2>
              <p>You can follow all seminars, workshops, and career events at our university through this platform.</p>
              <p>Use the menu above to announce a new event or browse upcoming ones.</p>
              <figure><img src="/kampus-genel.jpg" alt="SDU Campus" /></figure>
            </section>
            <section>
              <h2>Upcoming Events</h2>
              <EventList events={upcoming} onShowDetail={showDetail} />
              <p><button type="button" onClick={() => go("events")}>See all events</button></p>
            </section>
          </>
        )}
        {page === "events" && (
          <section>
            <h2>All Campus Events</h2>
            <EventFilter searchText={searchText} category={category} categories={categories}
              onSearchChange={setSearchText} onCategoryChange={setCategory} />
            {filtered.length > 0 && (
              <p id="result" role="status">{filtered.length} {filtered.length === 1 ? "event" : "events"} listed.</p>
            )}
            <EventList events={filtered} onShowDetail={showDetail} emptyText="No events found matching your search." />
          </section>
        )}
        {page === "detail" && selected && (
          <EventDetail event={selected} onBack={() => go("events")} onEdit={(id) => go("update", id)} />
        )}
        {page === "detail" && !selected && (
          <div>
            <div className="message error" role="alert">This event does not exist. Please choose one from the list.</div>
            <p><button type="button" onClick={() => go("events")}>← Back to Events</button></p>
          </div>
        )}
        {(page === "add" || page === "update") && (
          <EventForm submitLabel={page === "add" ? "Save" : "Update"} onSubmit={() => window.scrollTo(0, 0)} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;