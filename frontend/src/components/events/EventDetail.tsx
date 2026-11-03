import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface Props { event: CampusEvent }

function EventDetail({ event }: Props) {
  return (
    <article className={event.image ? "detail" : "detail no-image"}>
      {event.image && (
        <figure>
          <img src={event.image} alt={`${event.title} poster`} />
        </figure>
      )}
      <div>
        <dl>
          <dt>Date</dt><dd>{formatDate(event.date)}</dd>
          <dt>Time</dt><dd>{event.time}</dd>
          <dt>Location</dt><dd>{event.location}</dd>
          <dt>Category</dt><dd>{event.category}</dd>
          <dt>Capacity</dt><dd>{event.capacity}</dd>
        </dl>
        <p>{event.description}</p>
        <div className="actions">
          <Link className="button" to="/events">Back to list</Link>
          <Link className="button" to={`/admin/${event.id}/edit`}>Update</Link>
        </div>
      </div>
    </article>
  );
}
export default EventDetail;