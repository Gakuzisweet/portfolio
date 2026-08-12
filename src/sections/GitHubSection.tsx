import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GithubIcon } from "../components/icons";
import { site } from "../data/site";
import { projects } from "../data/projects";

const repos = projects.filter((p) => p.github);

export function GitHubSection() {
  return (
    <section id="github" className="scroll-mt-16 border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="GitHub"
          title="Explore the source"
          description="Every project on this site is version-controlled and public: the commit history, testbenches, and design files are the real record of how it was built."
        />

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-bg-raised p-5 transition-colors hover:border-accent/50"
        >
          <div className="flex items-center gap-3">
            <GithubIcon size={22} className="text-text" />
            <div>
              <p className="text-sm font-semibold text-text">@{site.githubUsername}</p>
              <p className="text-xs text-text-dim">View full profile</p>
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="text-text-dim transition-colors group-hover:text-accent"
          />
        </a>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {repos.map((project) => (
            <a
              key={project.slug}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-border bg-bg-raised p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-mono text-sm text-text">
                  {project.github?.replace("https://github.com/", "")}
                </p>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-text-dim transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.oneLiner}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-dim">
                {project.software.slice(0, 3).map((s) => (
                  <span key={s} className="text-mono">
                    {s.split("(")[0].trim()}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
