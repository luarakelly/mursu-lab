export function List({
  children,
  className,
  style,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className={className}
      style={style}
    >
      {children}
    </ul>
  );
}