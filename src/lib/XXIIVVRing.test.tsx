import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { XXIIVVRing } from "./XXIIVVRing";

// Build a minimal HTML page that XXIIVVRing parses via JSDOM
const mockHtml = `
<html><body>
<ol>
  <li id="104"><a href="https://site-a.example.com/">Site A</a></li>
  <li id="105"><a href="https://natwelch.com/">natwelch.com</a></li>
  <li id="106"><a href="https://site-c.example.com/">Site C</a></li>
</ol>
</body></html>
`;

describe("XXIIVVRing", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        text: () => Promise.resolve(mockHtml),
      })
    );
  });

  it("renders prev, random, and next links from fetched data", async () => {
    render(await XXIIVVRing({}));
    expect(screen.getByText("Previous Site").closest("a")).toHaveAttribute(
      "href",
      "https://site-a.example.com/"
    );
    expect(screen.getByText("Next Site").closest("a")).toHaveAttribute(
      "href",
      "https://site-c.example.com/"
    );
  });

  it("renders fallback links when fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network error"))
    );
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(await XXIIVVRing({}));
    expect(screen.getByText("Previous Site").closest("a")).toHaveAttribute(
      "href",
      "https://webring.xxiivv.com/"
    );
    expect(screen.getByText("Random Site").closest("a")).toHaveAttribute(
      "href",
      "https://lieu.cblgh.org/random"
    );
    expect(screen.getByText("Next Site").closest("a")).toHaveAttribute(
      "href",
      "https://webring.xxiivv.com/"
    );
  });

  it("renders three navigation links", async () => {
    render(await XXIIVVRing({}));
    expect(screen.getByText("Previous Site")).toBeInTheDocument();
    expect(screen.getByText("Random Site")).toBeInTheDocument();
    expect(screen.getByText("Next Site")).toBeInTheDocument();
  });
});
