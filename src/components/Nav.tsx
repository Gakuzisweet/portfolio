import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Container } from "./ui/Container";
import { GithubIcon } from "./icons";
import { site } from "../data/site";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-mono text-sm font-semibold tracking-tight text-text hover:text-accent"
        >
          <span className="text-accent">&gt;</span> {site.firstName.toLowerCase()}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-text-muted hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border-strong px-3 py-1.5 text-sm text-text hover:border-accent/60 hover:text-accent"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-bg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-text-muted hover:bg-bg-panel hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 border-t border-border pt-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md border border-border-strong px-3 py-2 text-center text-sm text-text"
              >
                GitHub
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-medium text-bg"
              >
                Resume
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
