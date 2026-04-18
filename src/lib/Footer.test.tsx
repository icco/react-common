import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Footer } from "./Footer";

// Mock the async ring components so Footer can be rendered synchronously
vi.mock("./RecurseRing", () => ({
  RecurseRing: () => <div data-testid="recurse-ring" />,
}));

vi.mock("./XXIIVVRing", () => ({
  XXIIVVRing: () => <div data-testid="xxiivv-ring" />,
}));

describe("Footer", () => {
  it("renders a footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("shows the current year in copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("shows a year range when startYear is provided", () => {
    render(<Footer startYear={2020} />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`2020 - ${year}`))).toBeInTheDocument();
  });

  it("shows the social section by default", () => {
    render(<Footer />);
    expect(screen.getByText("Social")).toBeInTheDocument();
  });

  it("hides the social section when all social flags are off", () => {
    render(
      <Footer
        showSocial={false}
        showRecurseRing={false}
        showXXIIVVRing={false}
      />
    );
    expect(screen.queryByText("Social")).not.toBeInTheDocument();
  });

  it("shows the privacy policy link by default", () => {
    render(<Footer />);
    expect(screen.getByTitle("Privacy Policy")).toBeInTheDocument();
  });

  it("hides the privacy policy link when showPrivacyPolicy is false", () => {
    render(<Footer showPrivacyPolicy={false} />);
    expect(screen.queryByTitle("Privacy Policy")).not.toBeInTheDocument();
  });

  it("shows a source repo link when provided", () => {
    render(<Footer sourceRepo="https://github.com/icco/test" />);
    expect(screen.getByTitle("Source Code")).toBeInTheDocument();
  });

  it("shows an edit link when editUrl is provided", () => {
    render(<Footer editUrl="/edit" />);
    expect(screen.getByTitle("Edit this page")).toBeInTheDocument();
  });

  it("renders the recurse ring section when showRecurseRing is true", () => {
    render(<Footer showRecurseRing={true} />);
    expect(screen.getByTestId("recurse-ring")).toBeInTheDocument();
  });

  it("hides the recurse ring section when showRecurseRing is false", () => {
    render(<Footer showRecurseRing={false} />);
    expect(screen.queryByTestId("recurse-ring")).not.toBeInTheDocument();
  });

  it("renders the xxiivv ring section when showXXIIVVRing is true", () => {
    render(<Footer showXXIIVVRing={true} />);
    expect(screen.getByTestId("xxiivv-ring")).toBeInTheDocument();
  });

  it("hides the xxiivv ring section when showXXIIVVRing is false", () => {
    render(<Footer showXXIIVVRing={false} />);
    expect(screen.queryByTestId("xxiivv-ring")).not.toBeInTheDocument();
  });
});
