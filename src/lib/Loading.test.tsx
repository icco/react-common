import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Loading } from "./Loading";

describe("Loading", () => {
  it("renders with default size lg and className mx-auto", () => {
    const { container } = render(<Loading />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("loading-lg", "mx-auto");
  });

  it("respects the size prop", () => {
    const { container } = render(<Loading size="sm" />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("loading-sm");
  });

  it("respects a custom className", () => {
    const { container } = render(<Loading className="my-custom" />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("my-custom");
  });

  it("renders all supported sizes", () => {
    for (const size of ["xs", "sm", "md", "lg"] as const) {
      const { container } = render(<Loading size={size} />);
      expect(container.querySelector("span")).toHaveClass(`loading-${size}`);
    }
  });
});
