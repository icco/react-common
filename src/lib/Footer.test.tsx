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

// Footer is an async Server Component — call it as a function and render the
// resolved JSX, since the jsdom/client renderer can't handle async components.
async function renderFooter(props: Parameters<typeof Footer>[0] = {}) {
  return render(await Footer(props));
}

describe("Footer", () => {
  it("renders a footer element", async () => {
    const { container } = await renderFooter();
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("shows the current year in copyright", async () => {
    await renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("shows a year range when startYear is provided", async () => {
    await renderFooter({ startYear: 2020 });
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`2020 - ${year}`))).toBeInTheDocument();
  });

  it("shows the social section by default", async () => {
    await renderFooter();
    expect(screen.getByText("Social")).toBeInTheDocument();
  });

  it("hides the social section when all social flags are off", async () => {
    await renderFooter({
      showSocial: false,
      showRecurseRing: false,
      showXXIIVVRing: false,
    });
    expect(screen.queryByText("Social")).not.toBeInTheDocument();
  });

  it("shows the privacy policy link by default", async () => {
    await renderFooter();
    expect(screen.getByTitle("Privacy Policy")).toBeInTheDocument();
  });

  it("hides the privacy policy link when showPrivacyPolicy is false", async () => {
    await renderFooter({ showPrivacyPolicy: false });
    expect(screen.queryByTitle("Privacy Policy")).not.toBeInTheDocument();
  });

  it("shows a source repo link when provided", async () => {
    await renderFooter({ sourceRepo: "https://github.com/icco/test" });
    expect(screen.getByTitle("Source Code")).toBeInTheDocument();
  });

  it("shows an edit link when editUrl is provided", async () => {
    await renderFooter({ editUrl: "/edit" });
    expect(screen.getByTitle("Edit this page")).toBeInTheDocument();
  });

  it("renders the recurse ring section when showRecurseRing is true", async () => {
    await renderFooter({ showRecurseRing: true });
    expect(screen.getByTestId("recurse-ring")).toBeInTheDocument();
  });

  it("hides the recurse ring section when showRecurseRing is false", async () => {
    await renderFooter({ showRecurseRing: false });
    expect(screen.queryByTestId("recurse-ring")).not.toBeInTheDocument();
  });

  it("renders the xxiivv ring section when showXXIIVVRing is true", async () => {
    await renderFooter({ showXXIIVVRing: true });
    expect(screen.getByTestId("xxiivv-ring")).toBeInTheDocument();
  });

  it("hides the xxiivv ring section when showXXIIVVRing is false", async () => {
    await renderFooter({ showXXIIVVRing: false });
    expect(screen.queryByTestId("xxiivv-ring")).not.toBeInTheDocument();
  });
});
