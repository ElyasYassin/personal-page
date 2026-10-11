/** Page gutter + max width shared by every section. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
