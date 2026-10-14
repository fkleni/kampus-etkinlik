import type { CampusEvent, Category } from "../types/campus-event";

export const categoryList: Category[] = ["Seminar", "Workshop", "Talk", "Competition"];

export const events: CampusEvent[] = [
  { id: "event-1", title: "Career Days", category: "Seminar", date: "2026-10-12", time: "10:00", location: "Innovation Laboratory", description: "Alumni talks and networking.", capacity: 45, image: "/career-days.jpg" },
  { id: "event-2", title: "Robotics Workshop", category: "Workshop", date: "2026-10-20", time: "14:00", location: "Electronics Laboratory", description: "Build and program a line-following robot with Arduino.", capacity: 25, image: "/robotics-workshop.jpg" },
  { id: "event-3", title: "Cyber Security Talk", category: "Talk", date: "2026-10-27", time: "13:00", location: "Lecture Hall B1", description: "An industry expert talks about careers in cyber security.", capacity: 50, image: "/cyber-security-talk.jpg" },
  { id: "event-4", title: "Web Design Workshop", category: "Workshop", date: "2026-11-03", time: "15:00", location: "Computer Laboratory 1", description: "Create your first personal web page with HTML and CSS.", capacity: 30, image: "/web-design-workshop.jpg" },
  { id: "event-5", title: "Entrepreneurship Talk", category: "Talk", date: "2026-11-24", time: "13:30", location: "Lecture Hall B2", description: "Young founders share their start-up stories.", capacity: 80, image: "/entrepreneurship-talk.jpg" },
  { id: "event-6", title: "Artificial Intelligence Seminar", category: "Seminar", date: "2026-12-08", time: "11:00", location: "Conference Hall A", description: "An introduction to artificial intelligence and its everyday uses.", capacity: 100, image: "/artificial-intelligence-seminar.jpg" },
];