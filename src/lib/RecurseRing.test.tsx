import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { RecurseRing } from "./RecurseRing";

const mockSites = [
  {
    website_uuid: "aaaa",
    website_id: 1,
    recurse_id: 1,
    website_name: "Site A",
    is_anonymous: false,
    url: "https://site-a.example.com/",
  },
  {
    website_uuid: "b3e98b33-7464-4211-ba0b-5cc38ebb03e9", // this is "us"
    website_id: 2,
    recurse_id: 45,
    website_name: "natwelch.com",
    is_anonymous: false,
    url: "https://natwelch.com/",
  },
  {
    website_uuid: "cccc",
    website_id: 3,
    recurse_id: 3,
    website_name: "Site C",
    is_anonymous: false,
    url: "https://site-c.example.com/",
  },
];

describe("RecurseRing", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockSites),
      })
    );
  });

  it("renders prev, random, and next links from fetched data", async () => {
    render(await RecurseRing({}));
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
    render(await RecurseRing({}));
    expect(screen.getByText("Previous Site").closest("a")).toHaveAttribute(
      "href",
      "https://ring.recurse.com/prev?id=45"
    );
    expect(screen.getByText("Random Site").closest("a")).toHaveAttribute(
      "href",
      "https://ring.recurse.com/rand"
    );
    expect(screen.getByText("Next Site").closest("a")).toHaveAttribute(
      "href",
      "https://ring.recurse.com/next?id=45"
    );
  });

  it("renders three navigation links", async () => {
    render(await RecurseRing({}));
    expect(screen.getByText("Previous Site")).toBeInTheDocument();
    expect(screen.getByText("Random Site")).toBeInTheDocument();
    expect(screen.getByText("Next Site")).toBeInTheDocument();
  });
});
