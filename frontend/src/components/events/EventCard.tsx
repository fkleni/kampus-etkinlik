import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface Props { event: CampusEvent }

function EventCard({ event }: Props) {
  return (
    <article>
      <h3>{event.title}</h3>
      <p>{formatDate(event.date)} · {event.time}</p>
      <p>{event.location}</p>
      <p>{event.category}</p>
      <Link to={`/events/${event.id}`}>View details</Link>
    </article>
  );
}
export default EventCard;