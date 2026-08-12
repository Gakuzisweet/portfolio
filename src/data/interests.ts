export interface Interest {
  title: string;
  detail: string;
}

export const interests: Interest[] = [
  {
    title: "Digital Systems & Computer Architecture",
    detail: "Custom ISA design and CPU datapaths: how instructions actually become hardware behavior.",
  },
  {
    title: "PCB Design & Electronics",
    detail: "Schematic capture, component selection, and layout for real, buildable boards.",
  },
  {
    title: "Embedded Systems",
    detail: "Microcontroller-based systems and the sensors, buses, and I/O around them.",
  },
  {
    title: "Sensors & Signal Acquisition",
    detail: "IMU, barometer, and magnetometer integration for attitude and position sensing.",
  },
  {
    title: "UAV / Flight-Control Systems",
    detail: "Flight-controller hardware design: the sensor and compute stack behind stable flight.",
  },
];
