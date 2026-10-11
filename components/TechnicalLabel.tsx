/** Tiny monospace annotation: figure numbers, IDs, dates, coordinates. */
export function TechnicalLabel({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}) {
  return <Tag className={`label text-muted ${className}`}>{children}</Tag>;
}
