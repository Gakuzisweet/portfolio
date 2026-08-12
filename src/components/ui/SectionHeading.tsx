export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-center gap-3 text-mono text-xs text-accent">
        <span aria-hidden="true">{`// ${index}`}</span>
        <span className="h-px flex-1 max-w-8 bg-accent/40" aria-hidden="true" />
        <span className="uppercase tracking-[0.18em] text-text-dim">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-text">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
