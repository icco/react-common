import Link from "next/link";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export interface NavLink {
  name: string;
  href: string;
  prefetch?: boolean;
  className?: string;
  /** Optional icon rendered before the label. When provided, the label is
   *  hidden below the `md` breakpoint and the link uses `aria-label={name}`
   *  so the link stays accessible when icon-only. */
  icon?: React.ReactNode;
}

export interface SiteHeaderProps {
  links?: NavLink[];
  showThemeToggle?: boolean;
  showLogo?: boolean;
  logoSize?: number;
  logoHref?: string;
  /** Custom brand element rendered on the left in place of the default Logo
   *  (e.g. a wordmark for a product app). When provided, `showLogo`,
   *  `logoSize`, and `logoHref` are ignored. */
  brand?: React.ReactNode;
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
  brand,
  children,
}: SiteHeaderProps) {
  const hasRightContent =
    showThemeToggle || links.length > 0 || children !== undefined;
  return (
    <header>
      <nav className="flex items-center py-8">
        {brand ? (
          <div className="flex-none px-8">{brand}</div>
        ) : showLogo ? (
          <div className="flex-none">
            <Link href={logoHref}>
              <Logo size={logoSize} className="logo stroke-current px-8" />
            </Link>
          </div>
        ) : null}
        <div className="grow" />
        {hasRightContent && (
          <div className="flex items-center gap-4 px-8">
            {showThemeToggle && <ThemeToggle />}
            {links.map(({ name, href, prefetch, className, icon }) => (
              <Link
                key={name}
                href={href}
                prefetch={prefetch}
                aria-label={icon ? name : undefined}
                className={`flex items-center gap-2 ${className ?? ""}`.trim()}
              >
                {icon ? <span className="flex-none">{icon}</span> : null}
                <span className={icon ? "hidden md:inline" : undefined}>
                  {name}
                </span>
              </Link>
            ))}
            {children}
          </div>
        )}
      </nav>
    </header>
  );
}
