import { ReactNode } from "react"
import Link from "next/link"

import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export interface NavLink {
  name: string
  href: string
  prefetch?: boolean
  className?: string
}

export interface SiteHeaderProps {
  links?: NavLink[]
  showThemeToggle?: boolean
  logoSize?: number
  logoHref?: string
  extraContent?: ReactNode
}

export function SiteHeader({
  links = [],
  showThemeToggle = true,
  logoSize = 50,
  logoHref = "/",
  extraContent,
}: SiteHeaderProps) {
  return (
    <header>
      <nav className="flex py-8">
        <div className="flex-none">
          <Link href={logoHref}>
            <Logo size={logoSize} className="logo stroke-current px-8" />
          </Link>
        </div>
        <div className="grow" />
        {extraContent && (
          <div className="mr-8 content-center">{extraContent}</div>
        )}
        {showThemeToggle && (
          <div className="mr-8 content-center">
            <ThemeToggle />
          </div>
        )}
        {links.length > 0 && (
          <div className="flex-none content-center mr-4 flex">
            {links.map(({ name, href, prefetch, className }) => (
              <Link
                key={name}
                href={href}
                prefetch={prefetch}
                className={className ?? "mx-4"}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
