import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

// Mock Vivus (used in Logo.tsx) — it relies on SVG DOM APIs not available in jsdom
vi.mock("vivus", () => ({
  default: vi.fn(),
}));

// Mock next/link as a plain anchor
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/web-vitals
vi.mock("next/web-vitals", () => ({
  useReportWebVitals: vi.fn(),
}));

// Mock @wrksz/themes/client (re-exported via ClientThemeProvider.tsx)
vi.mock("@wrksz/themes/client", () => ({
  useTheme: vi.fn(() => ({
    resolvedTheme: "light",
    setTheme: vi.fn(),
  })),
  ClientThemeProvider: ({
    children,
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => <>{children}</>,
}));
