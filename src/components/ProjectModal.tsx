import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { Badge } from "./ui/Badge";
import { GithubIcon } from "./icons";
import { cn } from "../lib/utils";

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-mono text-xs uppercase tracking-wider text-accent">{label}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{text}</p>
    </div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h4 className="text-mono text-xs uppercase tracking-wider text-accent">{label}</h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      returnFocusRef.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/80 p-4 py-8 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-xl border border-border-strong bg-bg-raised shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border bg-grid-fine p-6">
          <div>
            <span className="text-mono text-xs uppercase tracking-wider text-accent">
              {project.tagline}
            </span>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold text-text">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-text-dim">{project.role}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 rounded-md border border-border-strong p-2 text-text-muted hover:border-accent/60 hover:text-accent"
          >
            <X size={18} />
          </button>
        </div>

        {project.images && project.images.length > 0 && (
          <div
            className={cn(
              "grid gap-3 border-b border-border p-6 sm:p-8 sm:pb-0",
              project.images.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"
            )}
          >
            {project.images.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-border">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full bg-bg object-cover"
                />
                {image.caption && (
                  <figcaption className="border-t border-border bg-bg px-3 py-2 text-xs text-text-dim">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_220px]">
          <div className="space-y-7 md:order-1">
            <CaseStudyBlock label="Problem" text={project.problem} />
            <CaseStudyBlock label="Approach" text={project.approach} />
            <CaseStudyBlock label="Implementation" text={project.implementation} />
            <ListBlock label="Engineering Decisions" items={project.engineering} />

            {project.codeSnippet && (
              <div>
                <h4 className="text-mono text-xs uppercase tracking-wider text-accent">
                  Code
                </h4>
                <p className="mt-2 text-xs text-text-dim">{project.codeSnippet.caption}</p>
                <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-bg p-4 text-mono text-xs leading-relaxed text-text-muted">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            <ListBlock label="Results" items={project.results} />
            <ListBlock label="What I Learned" items={project.learned} />
            <ListBlock label="Known Limitations" items={project.limitations ?? []} />
          </div>

          <aside className="space-y-6 md:order-2">
            {project.specs.length > 0 && (
              <div className="rounded-lg border border-border bg-bg p-4">
                <h4 className="text-mono text-xs uppercase tracking-wider text-text-dim">
                  Specs
                </h4>
                <dl className="mt-3 space-y-2.5">
                  {project.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-mono text-[11px] uppercase tracking-wide text-text-dim">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-text">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {project.hardware.length > 0 && (
              <div>
                <h4 className="text-mono text-xs uppercase tracking-wider text-text-dim">
                  Hardware
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.hardware.map((h) => (
                    <Badge key={h}>{h}</Badge>
                  ))}
                </div>
              </div>
            )}

            {project.software.length > 0 && (
              <div>
                <h4 className="text-mono text-xs uppercase tracking-wider text-text-dim">
                  Software / Tools
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.software.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            )}

            {project.concepts.length > 0 && (
              <div>
                <h4 className="text-mono text-xs uppercase tracking-wider text-text-dim">
                  Concepts
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.concepts.map((c) => (
                    <Badge key={c} className="border-accent/25 text-accent/90">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong px-3 py-2 text-sm text-text hover:border-accent/60 hover:text-accent"
                >
                  <GithubIcon size={15} />
                  View Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-medium text-bg"
                >
                  <ExternalLink size={15} />
                  View Demo
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
