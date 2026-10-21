import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
  events: CampusEvent[];
  onShowDetail: (id: string) => void;
  emptyText?: string;
}

function EventList({ events, onShowDetail, emptyText = "No events." }: EventListProps) {
  if (events.length === 0) {
    return (
      <p className="result" role="status">
        {emptyText}
      </p>
    );
  }

  return (
    <div className="cards">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onShowDetail={onShowDetail} />
      ))}
    </div>
  );
}

export default EventList;