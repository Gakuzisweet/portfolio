export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  detail: string;
}

// Add work terms, clubs, or coursework as new entries — most recent first.
export const timeline: TimelineEntry[] = [
  {
    period: "Expected 2029",
    title: "B.Sc. Electrical Engineering (Co-op)",
    place: "University of Alberta",
    detail:
      "[ADD: relevant coursework, GPA if you want to include it, or standing.]",
  },
  {
    period: "[ADD DATES]",
    title: "[ADD: Co-op work term, engineering club, or research position]",
    place: "[ADD: organization]",
    detail: "[ADD PROJECT DESCRIPTION — role and what you worked on.]",
  },
];
