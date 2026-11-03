import type { EventFormData, EventFormErrors } from "../types/campus-event";

export function validateEvent(data: EventFormData): EventFormErrors {
  const errors: EventFormErrors = {};

  if (data.title.trim().length < 3) errors.title = "Title must be at least 3 characters.";
  if (data.category === "") errors.category = "Select a category.";
  if (data.date === "") errors.date = "Select a date.";
  if (data.time === "") errors.time = "Select a time.";
  if (data.location.trim() === "") errors.location = "Location cannot be empty.";

  const capacity = Number(data.capacity);
  if (data.capacity.trim() === "" || !Number.isInteger(capacity) || capacity < 1 || capacity > 1000)
    errors.capacity = "Enter a whole number between 1 and 1000.";

  if (data.description.trim().length < 10)
    errors.description = "Description must be at least 10 characters.";

  return errors;
}