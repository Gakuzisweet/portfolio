// ---------------------------------------------------------------------------
// Skills shown here are backed by evidence in the featured projects (and,
// where noted, your resume's Technical Skills section). Add more as you
// gain and can back up that experience.
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
    title: "Hardware & Lab",
    skills: [
      { name: "Oscilloscope" },
      { name: "Soldering (SMT/THT)" },
      { name: "Breadboarding" },
      { name: "Hardware Debugging" },
      { name: "Circuit & Schematic Design", note: "Maverick" },
      { name: "PCB Design", note: "Maverick" },
      { name: "Custom Footprint Creation (IPC standard)", note: "Maverick" },
      { name: "Power & Decoupling Design", note: "Maverick" },
      { name: "USB Interfacing & ESD Protection", note: "Maverick" },
      { name: "Sensor Integration (IMU / Baro / Mag)", note: "Maverick" },
      { name: "Digital Logic (RTL) Design", note: "T16 CPU" },
    ],
  },
  {
    title: "Embedded / Programming",
    skills: [
      { name: "C / C++" },
      { name: "Python", note: "T16 assembler, Maverick flight-stabilization algorithm" },
      { name: "Assembly (ARM)" },
      { name: "SystemVerilog", note: "T16 CPU" },
      { name: "VHDL" },
      { name: "RTL Verification & Testbenches", note: "T16 CPU" },
      { name: "Custom ISA / CPU Architecture", note: "T16 CPU" },
      { name: "Assembler Design (two-pass)", note: "T16 CPU" },
      { name: "Sensor Fusion (complementary filter)", note: "Maverick" },
      { name: "UART Protocol Implementation", note: "T16 CPU" },
    ],
  },
  {
    title: "Engineering Tools",
    skills: [
      { name: "Altium Designer", note: "Maverick" },
      { name: "KiCad" },
      { name: "Xilinx Vivado", note: "T16 CPU" },
      { name: "STM32CubeMX" },
      { name: "WaveForms" },
      { name: "Git / GitHub", note: "both projects" },
      { name: "Zybo Z7-10 (Zynq-7000) FPGA board", note: "T16 CPU" },
    ],
  },
];
