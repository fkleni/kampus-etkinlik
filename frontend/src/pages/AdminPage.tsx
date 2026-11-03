import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`Delete "${title}"?`)) deleteEvent(id);
  }

  return (
    <section>
      <h2>Event Management</h2>
      <Link className="button" to="/admin/new">+ New event</Link>

      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Event</th><th>Date</th><th>Category</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td data-label="Event">{event.title}</td>
                <td data-label="Date">{formatDate(event.date)}</td>
                <td data-label="Category">{event.category}</td>
                <td className="row-actions">
                  <Link className="button" to={`/admin/${event.id}/edit`}>Edit</Link>
                  <button type="button" className="button-delete"
                    onClick={() => handleDelete(event.id, event.title)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
export default AdminPage;