import Link from "next/link";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export interface NavLink {
  name: string;
  href: string;
  prefetch?: boolean;
  className?: string;
}

export interface SiteHeaderProps {
  links?: NavLink[];
  showThemeToggle?: boolean;
  logoSize?: number;
  logoHref?: string;
}

export function SiteHeader({
  links = [],
  showThemeToggle = true,
  logoSize = 50,
  logoHref = "/",
}: SiteHeaderProps) {
  return (
    <header>
      <nav className="flex items-center py-8">
        <div className="flex-none">
          <Link href={logoHref}>
            <Logo size={logoSize} className="logo stroke-current px-8" />
          </Link>
        </div>
        <div className="grow" />
        {(showThemeToggle || links.length > 0) && (
          <div className="flex items-center gap-4 px-8">
            {showThemeToggle && <ThemeToggle />}
            {links.map(({ name, href, prefetch, className }) => (
              <Link
                key={name}
                href={href}
                prefetch={prefetch}
                className={className}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
