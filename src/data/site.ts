// ---------------------------------------------------------------------------
// Core site identity. Edit these values to personalize the site.
// ---------------------------------------------------------------------------

// Vite's configured base path (see vite.config.ts) — needed to correctly
// reference files in /public (like resume.pdf) when deployed to a GitHub
// Pages project subpath such as /portfolio/.
export const BASE_URL = import.meta.env.BASE_URL;

export const site = {
  name: "Mohamednur Zeinu",
  firstName: "Mohamednur",
  role: "Electrical Engineering Student",
  focusAreas: ["Hardware", "Embedded Systems", "Electronics"],

  university: "University of Alberta",
  program: "B.Sc. Electrical Engineering (Co-op)",
  gradYear: "2029",

  email: "mnur.zeinu@gmail.com",
  github: "https://github.com/Gakuzisweet",
  githubUsername: "Gakuzisweet",
  linkedin: "https://www.linkedin.com/in/mohamednur-zeinu",

  // Drop your real PDF at /public/resume.pdf — see README for instructions.
  resumeUrl: `${BASE_URL}resume.pdf`,

  // Hero intro — grounded in the two shipped projects (custom CPU + custom PCB).
  intro:
    "Electrical Engineering student who builds hardware from first principles: a 16-bit CPU with a custom instruction set, running on real FPGA hardware, and a flight-controller PCB designed from schematic to layout. I like taking a system from a spec on paper to something you can put a multimeter or a UART cable on.",

  aboutHighlights: [
    {
      label: "What I study",
      detail: "Electrical Engineering (Co-op) at the University of Alberta, graduating 2029.",
    },
    {
      label: "What I build",
      detail:
        "Digital systems and hardware from the ground up: custom CPU architecture in SystemVerilog, and custom PCBs in Altium Designer.",
    },
    {
      label: "What I enjoy",
      detail:
        "Engineering problems where a design decision on paper (an ISA choice, a component selection) has a direct, testable consequence in hardware.",
    },
    {
      label: "What I'm looking for",
      detail: "A Winter 2027 engineering internship in hardware, embedded systems, or electronics.",
    },
  ],
} as const;
