import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";

function HomePage() {
  const { events } = useEvents();
  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return (
    <section>
      <h2>Upcoming 2 Events</h2>
      <EventList events={upcoming} />
      <Link className="button" to="/events">See all events</Link>
    </section>
  );
}
export default HomePage;