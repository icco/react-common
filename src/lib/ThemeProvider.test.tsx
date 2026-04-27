import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ClientThemeProvider } from "./ClientThemeProvider";

/**
 * The published export is `ThemeProvider` from `@wrksz/themes/next` (async Server Component).
 * Vitest renders the client subtree via `ClientThemeProvider`, which the Next provider wraps.
 */
describe("ThemeProvider", () => {
  it("renders children", () => {
    render(
      <ClientThemeProvider attribute="class">
        <div>test content</div>
      </ClientThemeProvider>
    );
    expect(screen.getByText("test content")).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <ClientThemeProvider attribute="class">
        <span>first</span>
        <span>second</span>
      </ClientThemeProvider>
    );
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
  });
});
