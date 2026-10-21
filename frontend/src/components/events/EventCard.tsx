import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <article>
      <h3>{event.title}</h3>
      <p>
        {event.category} · <time dateTime={event.date}>{formatDate(event.date)}</time>
      </p>
      <p>{event.location}</p>
      <p>Quota: {event.capacity} people</p>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onShowDetail(event.id);
          }}
        >
          View details →
        </a>
      </p>
    </article>
  );
}

export default EventCard;