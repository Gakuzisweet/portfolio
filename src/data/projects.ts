// ---------------------------------------------------------------------------
// Project data. Add a new project by adding another object to this array —
// components/sections read from here, so nothing else needs to change.
//
// Fields marked "[ADD ...]" are placeholders where real information was not
// available and should be filled in with real, accurate content — never
// invented specs, results, or claims.
// ---------------------------------------------------------------------------

export type ProjectStatus = "featured" | "secondary" | "coming-soon";

export interface Spec {
  label: string;
  value: string;
}

export interface CodeSnippet {
  lang: string;
  caption: string;
  code: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  oneLiner: string;
  role: string;

  problem: string;
  approach: string;
  implementation: string;
  engineering: string[];
  results: string[];
  learned: string[];
  limitations?: string[];

  hardware: string[];
  software: string[];
  concepts: string[];
  specs: Spec[];

  github?: string;
  demo?: string;
  images?: ProjectImage[];
  codeSnippet?: CodeSnippet;
}

export const projects: Project[] = [
  {
    slug: "t16-cpu",
    name: "T16: 16-bit CPU From Scratch",
    tagline: "Custom ISA · SystemVerilog · FPGA",
    status: "featured",
    oneLiner:
      "A single-cycle, 16-bit CPU with a custom instruction set, built module-by-module in SystemVerilog and run on real FPGA hardware.",
    role: "Sole designer: ISA design, RTL, verification, FPGA bring-up",

    problem:
      "Wanted to understand computer architecture from the inside rather than just programming against it: how a fetched instruction actually becomes a register write, an ALU operation, or a byte on a UART line, cycle by cycle.",

    approach:
      "Designed a small, fully custom, load/store instruction set (T16) before writing any RTL: 16-bit fixed-width instructions across five formats (R/I/L/B/J), 8 general-purpose registers with R0 hardwired to zero, no architectural flags register (branches compare two registers directly), and a Harvard memory model with separate instruction/data memory. Every decision in the ISA spec was made to keep a single-cycle datapath fully verifiable rather than to maximize feature breadth. Pipelining, interrupts, and a flags register were deliberately scoped out.",

    implementation:
      "Built module-by-module on short-lived feature branches (ALU and register file first, top-level integration last), merging into main only after each module's own testbench passed. Final integration in cpu_top.sv wires together the program counter, instruction memory, instruction decoder, control unit, register file, ALU, memory decoder + data memory, and a UART transmitter, with fetch through write-back completing in a single clock period.",

    engineering: [
      "No flags register: conditional branches (BEQ/BNE) compare two registers directly, removing an entire class of control-path hazards a status register would introduce.",
      "Word-addressed memory instead of byte-addressed, eliminating alignment logic entirely, a deliberate simplification given the instruction and data widths involved.",
      "Memory-mapped UART: a store to address 0xFFF is intercepted by mem_decoder.sv before it reaches data memory and routed to a UART transmitter instead, giving the CPU a real, observable output channel with zero dedicated I/O opcodes.",
      "Register-file read-port reuse: SW's \"Rd\" field actually names a source register (the value being stored), not a destination. Since the register file only exposes two read ports, mem_write being asserted reroutes that field into the second read port instead of Rs2, documented explicitly in cpu_top.sv rather than left implicit.",
      "Every internal signal in cpu_top.sv is declared before any submodule instantiation references it, avoiding a real Vivado footgun: its single-pass compiler will silently create an implicit, possibly wrongly-sized wire the first time a signal is used ahead of its declaration.",
    ],

    results: [
      "cpu_top.sv integrates every module into a complete CPU and passes behavioral simulation running a hand-assembled Fibonacci-sequence demo program (computes and stores the first 8 Fibonacci numbers, then halts).",
      "Synthesized and run on physical Zybo Z7-10 hardware, with UART output observed on a PC terminal through an external FTDI USB-to-serial adapter wired to a Pmod pin.",
      "Per-module testbenches for the ALU, register file, and instruction decoder each print PASS/FAIL per check plus a final summary line; all pass ahead of top-level integration.",
    ],

    learned: [
      "How one ISA decision (dropping the flags register) propagates all the way down into hazard-free control logic: the right architectural constraint removes entire categories of bugs before any RTL is written.",
      "The payoff of testbenching modules in isolation before integration: bugs in the decoder or register file surfaced and were fixed long before they could hide inside full-CPU behavior.",
      "A concrete Vivado synthesis quirk (implicit wire creation from use-before-declare) that isn't obvious from the language spec alone and only shows up by actually synthesizing for hardware.",
    ],

    limitations: [
      "Single-cycle only: no pipelining, interrupts, or exceptions.",
      "mem_decoder.sv doesn't feed a UART-busy signal back to the CPU, so a program issuing a second UART write before the first byte finishes transmitting may drop data.",
      "No assembler included in the repo; .mem programs are currently hand-assembled.",
    ],

    hardware: [
      "Digilent Zybo Z7-10 (Xilinx Zynq-7000, xc7z010clg400-1)",
      "External USB-to-serial (FTDI) adapter on Pmod JE pin 0 for UART readout",
    ],
    software: ["SystemVerilog", "Xilinx Vivado (synthesis + behavioral simulation)", "Git"],
    concepts: [
      "Custom ISA / CPU architecture design",
      "Single-cycle datapath design",
      "Harvard memory architecture",
      "Memory-mapped I/O",
      "UART protocol implementation",
      "RTL verification / testbenches",
      "FPGA synthesis & pin constraints",
    ],

    specs: [
      { label: "ISA", value: "Custom, 16-bit, load/store" },
      { label: "Registers", value: "8 × 16-bit GPRs (R0 hardwired to 0)" },
      { label: "Memory", value: "4096 × 16-bit words, Harvard, word-addressed" },
      { label: "Cycle model", value: "Single-cycle" },
      { label: "I/O", value: "Memory-mapped UART TX (address 0xFFF)" },
      { label: "Target", value: "Zybo Z7-10 (Zynq-7000)" },
    ],

    github: "https://github.com/mohamednurZ/Bare-metal-16-bit-CPU-design",

    codeSnippet: {
      lang: "systemverilog",
      caption:
        "cpu_top.sv: reusing the register file's second read port for SW's source operand, with the reasoning documented inline rather than left implicit.",
      code: `// rs2_addr: branches read b_rs2. BUT for SW specifically, the ISA
// spec's "Rd" field is actually the *source* register holding the
// value to store (MEM[Rs1+imm6] = Rd), not a write destination.
// Since regfile only has two read ports, we reuse the second one:
// when mem_write is asserted (SW), route 'rd' into this read port
// instead of 'rs2', so its VALUE comes out as rs2_data and can be
// forwarded to mem_decoder as the data to store.
assign regfile_rs1_addr = use_branch_regs ? b_rs1 : rs1;
assign regfile_rs2_addr = use_branch_regs ? b_rs2 : (mem_write ? rd : rs2);`,
    },
  },

  {
    slug: "maverick-fc",
    name: "Maverick: STM32 Flight-Controller PCB",
    tagline: "Altium Designer · STM32F4 · IMU / Baro / Mag sensor stack",
    status: "featured",
    oneLiner:
      "A custom flight-controller PCB built around an STM32F405, integrating a 6-axis IMU, barometer, magnetometer, and PWM motor outputs on a single board designed from schematic to layout.",
    role: "Sole designer: schematic capture, component selection, PCB layout (Altium Designer)",

    problem:
      "[ADD PROJECT DESCRIPTION: the specific use case or motivation for a custom flight-controller board rather than an off-the-shelf one.]",

    approach:
      "Built the sensor and I/O stack around an STM32F405RGT6 (64-pin LQFP, Arm Cortex-M4): a Bosch BMI088 6-axis IMU (separate accelerometer and gyroscope dies) for attitude sensing, a BMP388 barometer for altitude, and a magnetometer for heading reference, the standard sensor combination for flight-controller attitude/position estimation. USB connectivity runs through a CH340N USB-to-serial bridge with USBLC6-2SC6 ESD protection on the data lines, and an external Winbond W25N01G NAND flash chip is wired in for onboard data logging.",

    implementation:
      "Schematic captured across three sheets in Altium Designer (MCU + power, sensor stack, and PWM/IO), with PWM output headers exposing multiple channels for motor/servo control, and dedicated BOOT0/BOOT1 pins plus a reset button broken out for bootloader access during bring-up.",

    engineering: [
      "Chose the BMI088 over a combined 6-axis IMU part specifically for its separate accelerometer and gyroscope dies, a common flight-controller design choice to reduce gyro noise coupling from the accelerometer.",
      "Added dedicated ESD protection (USBLC6-2SC6) on the USB data lines rather than relying on the MCU's built-in tolerance, standard practice for a board with an exposed USB connector.",
      "Included external NAND flash (W25N01G) for onboard logging rather than depending solely on a USB/telemetry link to capture data.",
      "[ADD: power-budget, decoupling, or grounding/layer-stack decisions worth calling out once layout is finalized.]",
    ],

    results: [
      "Schematic and PCB layout complete in Altium Designer. Not yet fabricated.",
      "[ADD: fabrication and bring-up results (continuity checks, power-on behavior, sensor readings) once the board is built and tested.]",
    ],

    learned: [
      "[ADD PROJECT LEARNINGS: to be filled in once the board is fabricated and tested.]",
    ],

    hardware: [
      "STM32F405RGT6 (Arm Cortex-M4, 64-pin LQFP)",
      "Bosch BMI088 IMU (accelerometer + gyroscope)",
      "BMP388 barometric pressure sensor",
      "Magnetometer (heading reference)",
      "Winbond W25N01G NAND flash",
      "CH340N USB-to-serial bridge",
      "USBLC6-2SC6 ESD protection",
    ],
    software: ["Altium Designer (schematic capture + PCB layout)"],
    concepts: [
      "PCB schematic design",
      "Component selection & datasheet review",
      "Power & decoupling design",
      "USB interfacing & ESD protection",
      "Sensor-fusion hardware (IMU / baro / mag)",
      "PWM motor / servo control interfacing",
    ],

    specs: [
      { label: "MCU", value: "STM32F405RGT6 (Cortex-M4, LQFP-64)" },
      { label: "IMU", value: "Bosch BMI088 (accel + gyro)" },
      { label: "Barometer", value: "BMP388" },
      { label: "Storage", value: "Winbond W25N01G NAND flash" },
      { label: "USB", value: "CH340N bridge + USBLC6-2SC6 ESD protection" },
      { label: "Status", value: "Schematic + layout complete, not yet fabricated" },
    ],

    github: "https://github.com/mohamednurZ/Maverick",
  },

  {
    slug: "third-project",
    name: "[Project name coming soon]",
    tagline: "In progress",
    status: "coming-soon",
    oneLiner:
      "A third project is currently in progress and will be added here with a full write-up soon.",
    role: "",
    problem: "",
    approach: "",
    implementation: "",
    engineering: [],
    results: [],
    learned: [],
    hardware: [],
    software: [],
    concepts: [],
    specs: [],
  },
];

export const featuredProjects = projects.filter((p) => p.status === "featured");
export const otherProjects = projects.filter((p) => p.status !== "featured");
