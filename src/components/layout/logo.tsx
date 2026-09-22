import Link from "next/link"
import { siteConfig } from "@/config/site"

interface LogoProps {
  href?: string
  inverted?: boolean
  className?: string
}

export function Logo({
  href = "/",
  inverted = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-xl font-bold tracking-tight ${
        inverted ? "text-primary-foreground" : "text-foreground"
      } ${className}`}
      aria-label={siteConfig.name}
    >
      <span
        className={`flex size-9 items-center justify-center rounded-lg uppercase ${
          inverted
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground"
        }`}
      >
        {siteConfig.name.charAt(0)}
      </span>

      <span>{siteConfig.name}</span>
    </Link>
  )
}
