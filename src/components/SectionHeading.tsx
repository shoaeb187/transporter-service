export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </p>
      <h2 className="flex items-center justify-center gap-4 font-display text-3xl font-extrabold italic uppercase sm:text-4xl">
        <span className="speed-lines flip hidden sm:inline-block" />
        <span className="text-gold-foil">{title}</span>
        <span className="speed-lines hidden sm:inline-block" />
      </h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  );
}
