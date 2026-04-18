import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("renders a header element", () => {
    const { container } = render(<SiteHeader />);
    expect(container.querySelector("header")).toBeInTheDocument();
  });

  it("renders a logo link to / by default", () => {
    render(<SiteHeader />);
    const links = screen.getAllByRole("link");
    expect(links.some((l) => l.getAttribute("href") === "/")).toBe(true);
  });

  it("renders a logo link to a custom logoHref", () => {
    render(<SiteHeader logoHref="/home" />);
    const links = screen.getAllByRole("link");
    expect(links.some((l) => l.getAttribute("href") === "/home")).toBe(true);
  });

  it("renders nav links when provided", () => {
    render(
      <SiteHeader
        links={[
          { name: "About", href: "/about" },
          { name: "Blog", href: "/blog" },
        ]}
      />
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("does not render nav links when none are provided", () => {
    render(<SiteHeader links={[]} />);
    expect(
      screen.queryByRole("link", { name: "About" })
    ).not.toBeInTheDocument();
  });

  it("renders the theme toggle by default", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("hides the theme toggle when showThemeToggle is false", () => {
    render(<SiteHeader showThemeToggle={false} />);
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  it("renders extra content when provided", () => {
    render(<SiteHeader extraContent={<span>Extra</span>} />);
    expect(screen.getByText("Extra")).toBeInTheDocument();
  });
});
