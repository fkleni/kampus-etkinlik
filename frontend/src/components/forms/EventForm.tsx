import { categoryList } from "../../data/events";

interface EventFormProps {
  onSubmit: () => void;
  submitLabel?: string;
}

function EventForm({ onSubmit, submitLabel = "Save" }: EventFormProps) {
  return (
    <>
      <p>In this sprint the form is only a view; nothing is saved.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <label htmlFor="eventName">Event Name *</label>
          <input id="eventName" type="text" maxLength={80} placeholder="e.g. Career Days" required />
        </div>
        <div>
          <label htmlFor="category">Category *</label>
          <select id="category" defaultValue="" required>
            <option value="">Select...</option>
            {categoryList.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
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
        <button type="submit">{submitLabel}</button>
      </form>
    </>
  );
}

export default EventForm;