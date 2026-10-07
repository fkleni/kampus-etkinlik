import { events, parseDate, formatDate, toISODate } from "./data.js";

const list = document.querySelector("#event-list");
const filterForm = document.querySelector("#filter-form");

function createCard(event) {
  return `
    <article>
      <h3>${event.title}</h3>
      <p>${event.category} · <time datetime="${toISODate(event.date)}">${formatDate(event.date)}</time></p>
      <p><a href="etkinlik-detay.html?id=${event.id}">View details →</a></p>
    </article>`;
}

function render(items) {
  list.innerHTML = items.map(createCard).join("");
}

// Home page: data-limit="2" shows only the two nearest events.
if (list.dataset.limit) {
  const upcoming = [...events]
    .sort((a, b) => parseDate(a.date, a.time) - parseDate(b.date, b.time))
    .slice(0, Number(list.dataset.limit));
  render(upcoming);
} else {
  render(events);
}

// Event list page: search + category filter
if (filterForm) {
  const search = document.querySelector("#search");
  const categorySelect = document.querySelector("#category-filter");
  const result = document.querySelector("#result");

  [...new Set(events.map((e) => e.category))].forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });

  function applyFilters() {
    const query = search.value.trim().toLocaleLowerCase("en-US");
    const category = categorySelect.value;
    const matches = events.filter((e) => {
      const text = `${e.title} ${e.category} ${e.location} ${e.description}`.toLocaleLowerCase("en-US");
      const textMatches = text.includes(query);
      const categoryMatches = category === "" || e.category === category;
      return textMatches && categoryMatches;
    });
    render(matches);
    result.textContent = matches.length === 0
      ? "No events found matching your search."
      : `${matches.length} ${matches.length === 1 ? "event" : "events"} listed.`;
  }

  search.addEventListener("input", applyFilters);
  categorySelect.addEventListener("change", applyFilters);
  filterForm.addEventListener("submit", (e) => e.preventDefault());
  applyFilters();
}