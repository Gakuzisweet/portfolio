import { Mail, FileText } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { CircuitBackground } from "../components/CircuitBackground";
import { site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden py-20 sm:py-24">
      <CircuitBackground variant="d" />
      <Container className="relative">
        <SectionHeading index="06" eyebrow="Contact" title="Let's build something" />

        <div className="rounded-xl border border-border bg-bg-raised p-6 sm:p-10">
          <p className="max-w-xl text-base leading-relaxed text-text-muted">
            I'm looking for a Winter 2027 engineering internship in hardware, embedded systems,
            electronics, instrumentation, or power. If you're hiring, or just want to talk about
            CPU design or PCB layout, reach out.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} variant="primary" icon={<Mail size={16} />}>
              {site.email}
            </Button>
            <Button
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={<LinkedinIcon size={16} />}
            >
              LinkedIn
            </Button>
            <Button
              href={site.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={<GithubIcon size={16} />}
            >
              GitHub
            </Button>
            <Button
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              icon={<FileText size={16} />}
            >
              Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
