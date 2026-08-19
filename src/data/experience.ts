export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  detail?: string;
}

// Most recent first. Add work terms, clubs, or coursework as new entries.
export const timeline: TimelineEntry[] = [
  {
    period: "Sept 2025 – Present",
    title: "Radio Frequency Team Member",
    place: "AlbertaSat",
  },
  {
    period: "2025 – 2026",
    title: "ATCO Centennial Award",
    place: "ATCO",
    detail: "Merit-based scholarship.",
  },
  {
    period: "2024 – 2025",
    title: "Jason Lang Scholarship",
    place: "University of Alberta",
    detail: "Merit-based scholarship.",
  },
  {
    period: "2024 – 2025",
    title: "Speaker of the Week (5x)",
    place: "UAPSSA",
    detail: "Recognized five times by the University of Alberta Pre-Statistics Students' Association.",
  },
  {
    period: "2023 – Present",
    title: "Member and Board (Nominee)",
    place: "CIIRSA, Fort McMurray",
    detail: "[ADD: what CIIRSA does and your role/contributions on the board.]",
  },
  {
    period: "Expected 2029",
    title: "B.Sc. Electrical Engineering (Co-op)",
    place: "University of Alberta",
    detail:
      "4 of 8 academic terms complete. Available for an 8-month co-op work term starting January 2027.",
  },
];
