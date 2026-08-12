import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { interests } from "../data/interests";

export function Interests() {
  return (
    <section id="interests" className="scroll-mt-16 border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading index="04" eyebrow="Engineering Interests" title="Where I want to grow" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-lg border border-border bg-bg-raised p-5"
            >
              <h3 className="text-sm font-semibold text-text">{interest.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{interest.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
