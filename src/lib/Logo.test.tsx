import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Logo from "./Logo";

describe("Logo", () => {
  it("renders an SVG", () => {
    const { container } = render(<Logo size={50} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a wrapper div with the correct dimensions", () => {
    const { container } = render(<Logo size={100} />);
    const div = container.querySelector("div");
    expect(div).toHaveStyle({ width: "100px", height: "100px" });
  });

  it("applies a custom className to the wrapper div", () => {
    const { container } = render(<Logo size={50} className="logo-class" />);
    expect(container.querySelector("div")).toHaveClass("logo-class");
  });

  it("renders four path elements (the four circles)", () => {
    const { container } = render(<Logo size={50} />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBe(4);
  });
});
