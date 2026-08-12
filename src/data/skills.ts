// ---------------------------------------------------------------------------
// Skills shown here are backed by evidence in the featured projects.
// This list is intentionally conservative — add more (e.g. C/C++, Python,
// MATLAB, LTspice, KiCad, oscilloscope/multimeter work) as you gain and can
// back up that experience. Each entry: { name, note } — note is optional
// and should point at *why* (which project/context) if included.
// ---------------------------------------------------------------------------

export interface Skill {
  name: string;
  note?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Hardware",
    skills: [
      { name: "Circuit & Schematic Design", note: "Maverick" },
      { name: "PCB Design (Altium Designer)", note: "Maverick" },
      { name: "Component Selection & Datasheet Review", note: "Maverick" },
      { name: "Power & Decoupling Design", note: "Maverick" },
      { name: "USB Interfacing & ESD Protection", note: "Maverick" },
      { name: "Sensor Integration (IMU / Baro / Mag)", note: "Maverick" },
      { name: "Digital Logic (RTL) Design", note: "T16 CPU" },
    ],
  },
  {
    title: "Embedded / Digital Design",
    skills: [
      { name: "SystemVerilog", note: "T16 CPU" },
      { name: "RTL Verification & Testbenches", note: "T16 CPU" },
      { name: "Custom ISA / CPU Architecture", note: "T16 CPU" },
      { name: "FPGA Synthesis & Pin Constraints", note: "T16 CPU" },
      { name: "UART Protocol Implementation", note: "T16 CPU" },
    ],
  },
  {
    title: "Engineering Tools",
    skills: [
      { name: "Xilinx Vivado", note: "T16 CPU" },
      { name: "Altium Designer", note: "Maverick" },
      { name: "Git / GitHub", note: "both projects" },
      { name: "Zybo Z7-10 (Zynq-7000) FPGA board", note: "T16 CPU" },
    ],
  },
];
