import { events, toISODate, fromISODate } from "./data.js";

const form = document.querySelector("#event-form");
const message = document.querySelector("#form-message");
const isUpdate = form.dataset.mode === "update";
const fieldNames = ["eventName", "category", "date", "time", "location", "quota"];
let currentEvent = null;

function setMessage(type, ...content) {
  message.className = `message ${type}`;
  message.setAttribute("role", type === "error" ? "alert" : "status");
  message.replaceChildren(...content);
}

function clearMessage() {
  message.className = "";
  message.removeAttribute("role");
  message.replaceChildren();
}

function showErrors(errors) {
  fieldNames.forEach((name) => {
    const field = form.elements[name];
    const errorText = document.querySelector(`#${name}-error`);
    if (errors[name]) {
      errorText.textContent = errors[name];
      field.setAttribute("aria-invalid", "true");
    } else {
      errorText.textContent = "";
      field.removeAttribute("aria-invalid");
    }
  });
}

function validate(data) {
  const errors = {};
  if (data.title.length < 3) errors.eventName = "Event name must be at least 3 characters.";
  if (data.category === "") errors.category = "Choose a category.";
  if (data.date === "") errors.date = "Choose a date.";
  if (data.time === "") errors.time = "Choose a time.";
  if (data.location === "") errors.location = "Enter the location.";
  if (data.capacity !== null && (!Number.isInteger(data.capacity) || data.capacity < 1 || data.capacity > 1000)) {
    errors.quota = "Quota must be a whole number between 1 and 1000.";
  }
  return errors;
}

function fillForm(event) {
  form.elements.eventName.value = event.title;
  form.elements.category.value = event.category;
  form.elements.date.value = toISODate(event.date);
  form.elements.time.value = event.time;
  form.elements.location.value = event.location;
  form.elements.quota.value = event.capacity ?? "";
  form.elements.description.value = event.description;
}

function showMissingEvent() {
  document.querySelector("#form-intro")?.remove();
  const box = document.createElement("div");
  box.className = "message error";
  box.setAttribute("role", "alert");
  box.textContent = "No event was selected, or the event does not exist. Open an event from the list and use the \"Update this event\" button.";
  const link = document.createElement("p");
  link.innerHTML = '<a class="button" href="etkinlikler.html">Go to Events</a>';
  form.replaceWith(box, link);
}

if (isUpdate) {
  const id = new URLSearchParams(location.search).get("id");
  currentEvent = events.find((e) => e.id === id);
  if (currentEvent) {
    fillForm(currentEvent);
  } else {
    showMissingEvent();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearMessage();

  const fd = new FormData(form);
  const quota = fd.get("quota");
  const data = {
    id: currentEvent ? currentEvent.id : `event-${events.length + 1}`,
    title: fd.get("eventName").trim(),
    category: fd.get("category"),
    date: fromISODate(fd.get("date")),
    time: fd.get("time"),
    location: fd.get("location").trim(),
    capacity: quota === "" ? null : Number(quota),
    description: fd.get("description").trim(),
  };

  const errors = validate(data);
  showErrors(errors);

  if (Object.keys(errors).length > 0) {
    setMessage("error", "The form has errors. Please fix the marked fields.");
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  const title = document.createElement("p");
  title.textContent = isUpdate
    ? "Event updated (not saved in this sprint):"
    : "Event created (not saved in this sprint):";
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(data, null, 2);
  setMessage("success", title, pre);
});