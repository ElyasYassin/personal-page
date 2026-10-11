/** Section header: mono label with a signal tick, optional aside, rule below. */
export function SectionHeading({
  title,
  aside,
  id,
  tone = "light",
  className = "",
}: {
  title: string;
  aside?: React.ReactNode;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-6 border-b pb-3 ${
        tone === "dark" ? "rule-light text-snow" : "border-ink text-ink"
      } ${className}`}
    >
      <h2 id={id} className="label flex items-center gap-2.5">
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />
        {title}
      </h2>
      {aside && <div className={`label ${tone === "dark" ? "text-snow/60" : "text-muted"}`}>{aside}</div>}
    </div>
  );
}
