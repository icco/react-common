import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Social } from "./Social";

describe("Social", () => {
  it("renders the GitHub link", () => {
    render(<Social />);
    expect(screen.getByTitle("GitHub")).toBeInTheDocument();
  });

  it("renders the Mastodon link", () => {
    render(<Social />);
    expect(screen.getByTitle("Mastodon / merveilles.town")).toBeInTheDocument();
  });

  it("renders the RSS feed link", () => {
    render(<Social />);
    expect(screen.getByTitle("RSS Feed")).toBeInTheDocument();
  });

  it("renders the webring link when includeWebring is true", () => {
    render(<Social includeWebring={true} />);
    expect(screen.getByTitle("Webring")).toBeInTheDocument();
  });

  it("hides the webring link when includeWebring is false", () => {
    render(<Social includeWebring={false} />);
    expect(screen.queryByTitle("Webring")).not.toBeInTheDocument();
  });

  it("renders a nav element", () => {
    const { container } = render(<Social />);
    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  it("applies a custom className to the nav", () => {
    const { container } = render(<Social className="custom-nav" />);
    expect(container.querySelector("nav")).toHaveClass("custom-nav");
  });
});
