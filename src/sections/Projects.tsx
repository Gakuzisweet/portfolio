import { useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { projects, type Project } from "../data/projects";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-16 border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Each project below is a real design — the problem it solves, the engineering decisions behind it, and what actually happened when it hit hardware. Click a card for the full case study."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
