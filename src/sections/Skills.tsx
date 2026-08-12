import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Engineering Skills"
          title="What I work with"
          description="Every skill listed here is backed by one of the projects above, no percentage bars, just tools and techniques I've actually used."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-mono text-xs uppercase tracking-wider text-text-dim">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.note ? `Used in: ${skill.note}` : undefined}
                    className="inline-flex items-center rounded-md border border-border bg-bg-raised px-3 py-1.5 text-sm text-text"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
