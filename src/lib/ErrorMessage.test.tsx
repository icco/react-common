import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the message text", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorMessage error={new Error("oops")} message="Something broke" />
    );
    expect(screen.getByText("Something broke")).toBeInTheDocument();
  });

  it("renders an aside element", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { container } = render(
      <ErrorMessage error="err" message="Bad thing" />
    );
    expect(container.querySelector("aside")).toBeInTheDocument();
  });

  it("calls console.error with the error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const err = new Error("test error");
    render(<ErrorMessage error={err} message="Oops" />);
    expect(spy).toHaveBeenCalledWith(err);
  });
});
