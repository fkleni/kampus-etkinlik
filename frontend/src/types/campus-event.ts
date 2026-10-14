export type Category = "Seminar" | "Workshop" | "Talk" | "Competition";

export interface CampusEvent {
  id: string;
  title: string;
  category: Category;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  location: string;
  description: string;
  capacity: number;
  image?: string; // optional poster, file name inside public/
}