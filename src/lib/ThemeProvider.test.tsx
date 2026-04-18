import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ThemeProvider } from "./ThemeProvider";

describe("ThemeProvider", () => {
  it("renders children", () => {
    render(
      <ThemeProvider attribute="class">
        <div>test content</div>
      </ThemeProvider>
    );
    expect(screen.getByText("test content")).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <ThemeProvider attribute="class">
        <span>first</span>
        <span>second</span>
      </ThemeProvider>
    );
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
  });
});
