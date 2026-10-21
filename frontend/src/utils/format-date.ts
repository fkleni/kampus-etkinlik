// "2026-10-12" -> "October 12, 2026"
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}