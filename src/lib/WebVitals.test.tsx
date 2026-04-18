import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useReportWebVitals } from "next/web-vitals";

import { WebVitals } from "./WebVitals";

describe("WebVitals", () => {
  it("renders without crashing", () => {
    const { container } = render(<WebVitals analyticsPath="/api/metrics" />);
    expect(container).toBeInTheDocument();
  });

  it("renders an empty fragment (no DOM elements)", () => {
    const { container } = render(<WebVitals analyticsPath="/api/metrics" />);
    expect(container.firstChild).toBeNull();
  });

  it("calls useReportWebVitals", () => {
    render(<WebVitals analyticsPath="/api/metrics" />);
    expect(useReportWebVitals).toHaveBeenCalled();
  });
});
