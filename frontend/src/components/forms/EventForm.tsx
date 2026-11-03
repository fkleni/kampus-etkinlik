import { useState, type ChangeEvent, type FormEvent } from "react";
import { CATEGORIES, type EventFormData, type EventFormErrors } from "../../types/campus-event";
import { validateEvent } from "../../utils/validate-event";

interface Props {
  initialData: EventFormData;
  submitText: string;
  onSubmit: (data: EventFormData) => void;
}

function EventForm({ initialData, submitText, onSubmit }: Props) {
  const [data, setData] = useState<EventFormData>(initialData);
  const [errors, setErrors] = useState<EventFormErrors>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEvent(data);
    setErrors(found);
    if (Object.keys(found).length === 0) onSubmit(data);
  }

  function err(name: keyof EventFormData) {
    return errors[name] ? (
      <span className="error-text" id={`${name}-error`}>{errors[name]}</span>
    ) : null;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="title">Event Title</label>
        <input id="title" name="title" value={data.title} onChange={handleChange}
          aria-invalid={errors.title ? true : undefined} />
        {err("title")}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={data.category} onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}>
          <option value="">Select</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {err("category")}
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" value={data.date} onChange={handleChange}
          aria-invalid={errors.date ? true : undefined} />
        {err("date")}
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="time" value={data.time} onChange={handleChange}
          aria-invalid={errors.time ? true : undefined} />
        {err("time")}
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input id="location" name="location" value={data.location} onChange={handleChange}
          aria-invalid={errors.location ? true : undefined} />
        {err("location")}
      </div>

      <div>
        <label htmlFor="capacity">Capacity</label>
        <input id="capacity" name="capacity" value={data.capacity} onChange={handleChange}
          inputMode="numeric" aria-invalid={errors.capacity ? true : undefined} />
        {err("capacity")}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={data.description}
          onChange={handleChange} aria-invalid={errors.description ? true : undefined} />
        {err("description")}
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
}
export default EventForm;