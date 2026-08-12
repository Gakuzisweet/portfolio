import { Container } from "./ui/Container";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-xs text-text-dim sm:flex-row">
        <p className="text-mono">
          {site.name} — built with React, TypeScript &amp; Tailwind CSS
        </p>
        <p className="text-mono">&copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
