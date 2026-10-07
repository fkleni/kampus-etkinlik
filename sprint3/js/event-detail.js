import { events, formatDate, toISODate } from "./data.js";

const container = document.querySelector("#detail");
const id = new URLSearchParams(location.search).get("id");
const event = events.find((e) => e.id === id);

if (!event) {
  document.title = "Campus Events | Event not found";
  document.querySelector("h1").textContent = "Event not found";

  const wrapper = document.createElement("div");
  const box = document.createElement("div");
  box.className = "message error";
  box.setAttribute("role", "alert");
  box.textContent = id
    ? `There is no event with the id "${id}". Please choose one from the list.`
    : "No event was selected. Please choose one from the list.";
  const back = document.createElement("p");
  back.innerHTML = '<a class="button" href="etkinlikler.html">← Back to Events</a>';
  wrapper.append(box, back);
  container.replaceChildren(wrapper);
} else {
  document.title = `Campus Events | ${event.title}`;
  document.querySelector("h1").textContent = event.title;

  const poster = event.poster ?? `https://placehold.co/400x300?text=${encodeURIComponent(event.title)}`;
  const dateText = formatDate(event.date);

  container.innerHTML = `
    <figure>
      <img src="${poster}" alt="${event.title} poster: ${dateText}, ${event.time}, ${event.location}">
      <figcaption>${event.title} event poster</figcaption>
    </figure>
    <div>
      <h2>Event Details</h2>
      <dl>
        <dt>Date</dt>
        <dd><time datetime="${toISODate(event.date)}T${event.time}">${dateText}, ${event.time}</time></dd>
        <dt>Location</dt>
        <dd>${event.location}</dd>
        <dt>Category</dt>
        <dd>${event.category}</dd>
        <dt>Quota</dt>
        <dd>${event.capacity} people</dd>
      </dl>
      <h2>Description</h2>
      <p>${event.description}</p>
      <p class="actions">
        <a class="button" href="etkinlikler.html">← Back to Events</a>
        <a class="button" href="etkinlik-guncelle.html?id=${event.id}">Update this event</a>
      </p>
    </div>`;
}