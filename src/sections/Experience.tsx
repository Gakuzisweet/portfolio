import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CircuitBackground } from "../components/CircuitBackground";
import { timeline } from "../data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-16 overflow-hidden border-b border-border py-20 sm:py-24"
    >
      <CircuitBackground variant="a" flip />
      <Container className="relative">
        <SectionHeading index="04" eyebrow="Experience & Education" title="Timeline" />

        <ol className="relative space-y-8 border-l border-border pl-8">
          {timeline.map((entry) => (
            <li key={`${entry.title}-${entry.period}`} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
                aria-hidden="true"
              />
              <span className="text-mono text-xs uppercase tracking-wider text-accent">
                {entry.period}
              </span>
              <h3 className="mt-1 text-base font-semibold text-text">{entry.title}</h3>
              <p className="text-sm text-text-dim">{entry.place}</p>
              {entry.detail && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                  {entry.detail}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
