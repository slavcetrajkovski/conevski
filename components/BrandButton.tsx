import Link from "next/link"

interface BrandButtonProps {
  label: string
  href?: string
  variant?: "dark" | "red"
  className?: string
}

export function BrandButton({ label, href, variant = "dark", className }: BrandButtonProps) {
  const base = `blob-button px-8 py-4 text-xs font-semibold tracking-widest transition-transform hover:scale-105 cursor-pointer ${
    variant === "dark" ? "bg-foreground text-white" : "bg-brand-red text-white"
  } ${className ?? ""}`

  if (href) {
    return <Link href={href} className={base}>{label}</Link>
  }

  return (
    <button type="button" className={base}>
      {label}
    </button>
  )
}
