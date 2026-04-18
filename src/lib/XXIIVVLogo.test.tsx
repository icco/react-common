import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { XXIIVVLogo } from "./XXIIVVLogo";

describe("XXIIVVLogo", () => {
  it("renders an SVG with title 'xxiivv'", () => {
    render(<XXIIVVLogo />);
    expect(screen.getByTitle("xxiivv")).toBeInTheDocument();
  });

  it("uses the default size of 32", () => {
    const { container } = render(<XXIIVVLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "32");
    expect(svg).toHaveAttribute("width", "32");
  });

  it("respects a custom size", () => {
    const { container } = render(<XXIIVVLogo size={16} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "16");
    expect(svg).toHaveAttribute("width", "16");
  });

  it("applies a custom className", () => {
    const { container } = render(<XXIIVVLogo className="my-class" />);
    expect(container.querySelector("svg")).toHaveClass("my-class");
  });
});
