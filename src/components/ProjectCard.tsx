import { ArrowUpRight, Clock } from "lucide-react";
import type { Project } from "../data/projects";
import { Badge } from "./ui/Badge";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  if (project.status === "coming-soon") {
    return (
      <div className="flex min-h-[280px] flex-col justify-between rounded-xl border border-dashed border-border-strong bg-bg-raised/40 p-6">
        <div>
          <div className="flex items-center gap-2 text-mono text-xs text-text-dim">
            <Clock size={13} />
            IN PROGRESS
          </div>
          <h3 className="mt-3 text-lg font-semibold text-text-muted">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.oneLiner}</p>
        </div>
      </div>
    );
  }

  const cover = project.images?.[0];

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-bg-raised text-left transition-colors hover:border-accent/50 focus-visible:border-accent/50"
    >
      {cover && (
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full border-b border-border bg-bg object-cover"
        />
      )}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <span className="text-mono text-xs uppercase tracking-wider text-accent">
              {project.tagline}
            </span>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-text-dim transition-colors group-hover:text-accent"
            />
          </div>
          <h3 className="mt-3 text-xl font-semibold text-text">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.oneLiner}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.hardware.slice(0, 2).map((h) => (
            <Badge key={h}>{h.split("(")[0].trim()}</Badge>
          ))}
          {project.software.slice(0, 2).map((s) => (
            <Badge key={s}>{s.split("(")[0].trim()}</Badge>
          ))}
        </div>
      </div>
    </button>
  );
}
