/** Thin running-head used above sections: label left, aside right, rule below. */
export function SectionHeading({
  title,
  aside,
  id,
  className = "",
}: {
  title: string;
  aside?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline justify-between gap-6 border-b rule-strong pb-3 ${className}`}>
      <h2 id={id} className="label text-ink">
        {title}
      </h2>
      {aside && <div className="label text-muted">{aside}</div>}
    </div>
  );
}
