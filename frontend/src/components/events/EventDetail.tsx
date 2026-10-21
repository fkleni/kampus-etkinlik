import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <article className={event.image ? "detail" : "detail no-image"}>
      {event.image && (
        <figure>
          <img
            src={event.image}
            alt={`${event.title} poster: ${formatDate(event.date)}, ${event.time}, ${event.location}`}
          />
          <figcaption>{event.title} event poster</figcaption>
        </figure>
      )}
      <div>
        <h2>Event Details</h2>
        <dl>
          <dt>Date</dt>
          <dd>
            <time dateTime={`${event.date}T${event.time}`}>
              {formatDate(event.date)}, {event.time}
            </time>
          </dd>
          <dt>Location</dt>
          <dd>{event.location}</dd>
          <dt>Category</dt>
          <dd>{event.category}</dd>
          <dt>Quota</dt>
          <dd>{event.capacity} people</dd>
        </dl>
        <h2>Description</h2>
        <p>{event.description}</p>
        <p className="actions">
          <button type="button" onClick={() => onBack()}>
            ← Back to Events
          </button>
          <button type="button" onClick={() => onEdit(event.id)}>
            Update this event
          </button>
        </p>
      </div>
    </article>
  );
}

export default EventDetail;