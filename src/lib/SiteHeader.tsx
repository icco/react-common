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
  showLogo?: boolean;
  logoSize?: number;
  logoHref?: string;
  /** Extra content rendered on the right after the theme toggle and links
   *  (e.g. a user menu in product apps). */
  children?: React.ReactNode;
}

export function SiteHeader({
  links = [],
  showThemeToggle = true,
  showLogo = true,
  logoSize = 50,
  logoHref = "/",
  children,
}: SiteHeaderProps) {
  const hasRightContent =
    showThemeToggle || links.length > 0 || children !== undefined;
  return (
    <header>
      <nav className="flex items-center py-8">
        {showLogo && (
          <div className="flex-none">
            <Link href={logoHref}>
              <Logo size={logoSize} className="logo stroke-current px-8" />
            </Link>
          </div>
        )}
        <div className="grow" />
        {hasRightContent && (
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
            {children}
          </div>
        )}
      </nav>
    </header>
  );
}
