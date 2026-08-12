import { SectionHeading } from "../components/ui/SectionHeading";
import { Container } from "../components/ui/Container";
import { site } from "../data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading index="01" eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <p className="text-lg leading-relaxed text-text-muted">
            I'm {site.firstName}, an {site.role.toLowerCase()} at the {site.university}. I like
            engineering problems where a decision made on paper (an instruction-set choice, a
            component pick) has a direct, testable consequence in real hardware: a signal on an
            oscilloscope, a passing testbench, a byte arriving over UART.
          </p>

          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {site.aboutHighlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-bg-raised p-4">
                <dt className="text-mono text-xs uppercase tracking-wider text-accent">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
