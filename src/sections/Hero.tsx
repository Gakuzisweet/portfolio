import { ArrowRight, FileText, Mail } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { CircuitBackground } from "../components/CircuitBackground";
import { GithubIcon } from "../components/icons";
import { site } from "../data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <CircuitBackground />

      <Container className="relative">
        <div className="flex items-center gap-2 text-mono text-xs text-signal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
          </span>
          OPEN TO WINTER 2027 INTERNSHIPS
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-text sm:text-6xl">
          {site.name}
        </h1>

        <p className="mt-4 text-mono text-sm text-accent sm:text-base">
          {site.role}: {site.focusAreas.join(" • ")}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          {site.intro}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
            View Projects
          </Button>
          <Button href={site.github} target="_blank" rel="noreferrer" variant="secondary" icon={<GithubIcon size={16} />}>
            GitHub
          </Button>
          <Button href={site.resumeUrl} target="_blank" rel="noreferrer" variant="secondary" icon={<FileText size={16} />}>
            Resume
          </Button>
          <Button href="#contact" variant="ghost" icon={<Mail size={16} />}>
            Contact
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          <div>
            <dt className="text-mono text-xs uppercase tracking-wider text-text-dim">Program</dt>
            <dd className="mt-1 text-sm text-text">{site.program}</dd>
          </div>
          <div>
            <dt className="text-mono text-xs uppercase tracking-wider text-text-dim">University</dt>
            <dd className="mt-1 text-sm text-text">{site.university}</dd>
          </div>
          <div>
            <dt className="text-mono text-xs uppercase tracking-wider text-text-dim">Grad Year</dt>
            <dd className="mt-1 text-sm text-text">{site.gradYear}</dd>
          </div>
          <div>
            <dt className="text-mono text-xs uppercase tracking-wider text-text-dim">Focus</dt>
            <dd className="mt-1 text-sm text-text">Hardware / Embedded</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
