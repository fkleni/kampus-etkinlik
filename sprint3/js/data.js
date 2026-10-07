// All event data lives here. Other modules import it.
// Date format: DD-MM-YYYY, time format: HH:MM.
export const events = [
  { id: "event-1", title: "Career Days", category: "Seminar", date: "12-10-2026", time: "10:00", location: "Innovation Laboratory", description: "Alumni talks and networking.", capacity: 45, poster: "career-days.jpg" },
  { id: "event-2", title: "Robotics Workshop", category: "Workshop", date: "20-10-2026", time: "14:00", location: "Electronics Laboratory", description: "Build and program a line-following robot with Arduino.", capacity: 25, poster: "robotics-workshop.jpg"  },
  { id: "event-3", title: "Cyber Security Talk", category: "Talk", date: "27-10-2026", time: "13:00", location: "Lecture Hall B1", description: "An industry expert talks about careers in cyber security.", capacity: 50, poster: "cyber-security-talk.jpg" },
  { id: "event-4", title: "Web Design Workshop", category: "Workshop", date: "03-11-2026", time: "15:00", location: "Computer Laboratory 1", description: "Create your first personal web page with HTML and CSS.", capacity: 30, poster: "web-design-workshop.jpg" },
  { id: "event-5", title: "Entrepreneurship Talk", category: "Talk", date: "24-11-2026", time: "13:30", location: "Lecture Hall B2", description: "Young founders share their start-up stories.", capacity: 80, poster: "entrepreneurship-talk.jpg" },
  { id: "event-6", title: "Artificial Intelligence Seminar", category: "Seminar", date: "08-12-2026", time: "11:00", location: "Conference Hall A", description: "An introduction to artificial intelligence and its everyday uses.", capacity: 100, poster: "artificial-intelligence-seminar.jpg" },
];

// "12-10-2026" + "10:00" -> Date object (used for sorting)
export function parseDate(dateText, timeText = "00:00") {
  const [day, month, year] = dateText.split("-").map(Number);
  const [hour, minute] = timeText.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

// "12-10-2026" -> "October 12, 2026"
export function formatDate(dateText) {
  return parseDate(dateText).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// "12-10-2026" -> "2026-10-12" (for <time datetime> and <input type="date">)
export function toISODate(dateText) {
  const [day, month, year] = dateText.split("-");
  return `${year}-${month}-${day}`;
}

// "2026-10-12" -> "12-10-2026"
export function fromISODate(isoText) {
  if (!isoText) return "";
  const [year, month, day] = isoText.split("-");
  return `${day}-${month}-${year}`;
}