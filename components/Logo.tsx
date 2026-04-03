import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`text-2xl font-bold tracking-tight ${className ?? "text-foreground"}`}>
      CONEVSKI
    </Link>
  )
}
