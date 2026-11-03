import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface Props { events: CampusEvent[] }

function EventList({ events }: Props) {
  if (events.length === 0) return <p>No events found.</p>;
  return (
    <div className="cards">
      {events.map((e) => <EventCard key={e.id} event={e} />)}
    </div>
  );
}
export default EventList;