interface BlobShapeProps {
  variant: "1" | "2"
  color: "red" | "yellow"
  className?: string
}

export function BlobShape({ variant, color, className }: BlobShapeProps) {
  return (
    <div
      className={`blob-shape-${variant} ${
        color === "red" ? "bg-brand-red" : "bg-brand-yellow"
      } ${className ?? ""}`}
    />
  )
}
