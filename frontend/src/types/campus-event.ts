export const CATEGORIES = ["Seminar", "Workshop", "Talk", "Competition"] as const;
export type Category = (typeof CATEGORIES)[number];

export interface CampusEvent {
  id: string;
  title: string;
  category: Category;
  date: string;      // "2026-10-12"
  time: string;
  location: string;
  capacity: number;
  description: string;
  image?: string;
}

// Form version: no id, capacity is a string, category can be ""
export interface EventFormData {
  title: string;
  category: Category | "";
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
}

export type EventFormErrors = Partial<Record<keyof EventFormData, string>>;