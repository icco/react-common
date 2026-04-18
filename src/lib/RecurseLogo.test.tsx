import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { RecurseLogo } from "./RecurseLogo";

describe("RecurseLogo", () => {
  it("renders an SVG with title 'Recurse Center'", () => {
    render(<RecurseLogo />);
    expect(screen.getByTitle("Recurse Center")).toBeInTheDocument();
  });

  it("applies a custom className", () => {
    const { container } = render(<RecurseLogo className="my-class" />);
    expect(container.querySelector("svg")).toHaveClass("my-class");
  });

  it("respects the size prop", () => {
    const { container } = render(<RecurseLogo size={24} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("width", "24");
  });

  it("uses the default size of 12", () => {
    const { container } = render(<RecurseLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "12");
    expect(svg).toHaveAttribute("width", "12");
  });
});
