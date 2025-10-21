export type EventItem = { id: number; title: string; date: string; location: string };
export const events: EventItem[] = [
  { id: 1, title: "Kickoff Meetup", date: "Nov 12, 2025", location: "Main Hall" },
  { id: 2, title: "Design Workshop", date: "Nov 26, 2025", location: "Lab 2" },
  { id: 3, title: "Hack Night", date: "Dec 10, 2025", location: "Innovation Hub" },
];

export type TeamMember = { id: number; name: string; role: string };
export const team: TeamMember[] = [
  { id: 1, name: "Alex Carter", role: "President" },
  { id: 2, name: "Jamie Lee", role: "Vice President" },
  { id: 3, name: "Riley Chen", role: "Events Lead" },
  { id: 4, name: "Sam Patel", role: "Design Lead" },
];


