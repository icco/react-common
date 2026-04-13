export function Loading({
  className = "mx-auto",
  size = "lg",
}: {
  className?: string
  size?: "xs" | "sm" | "md" | "lg"
}) {
  return (
    <span
      className={`loading loading-bars loading-${size} ${className}`}
    />
  )
}
