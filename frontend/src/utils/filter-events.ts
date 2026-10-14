import type { CampusEvent, Category } from "../types/campus-event";

// Keep the events whose title or description contains the text.
export function searchEvents(list: CampusEvent[], text: string): CampusEvent[] {
  const q = text.trim().toLocaleLowerCase("en-US");
  return list.filter((e) =>
    `${e.title} ${e.description}`.toLocaleLowerCase("en-US").includes(q),
  );
}

// "" means all categories.
export function filterByCategory(list: CampusEvent[], category: Category | ""): CampusEvent[] {
  if (category === "") return list;
  return list.filter((e) => e.category === category);
}

export function findEventById(list: CampusEvent[], id: string): CampusEvent | undefined {
  return list.find((e) => e.id === id);
}