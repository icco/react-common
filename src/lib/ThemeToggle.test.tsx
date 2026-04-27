import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { useTheme } from "./ClientThemeProvider";

import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("renders a checkbox input", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("checkbox is unchecked when theme is light", () => {
    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "light",
      setTheme: vi.fn(),
      theme: "light",
      themes: [],
      systemTheme: undefined,
      forcedTheme: undefined,
    });
    render(<ThemeToggle />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("checkbox is checked when theme is dark", () => {
    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: vi.fn(),
      theme: "dark",
      themes: [],
      systemTheme: undefined,
      forcedTheme: undefined,
    });
    render(<ThemeToggle />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls setTheme when toggled from light to dark", async () => {
    const setTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "light",
      setTheme,
      theme: "light",
      themes: [],
      systemTheme: undefined,
      forcedTheme: undefined,
    });
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("calls setTheme when toggled from dark to light", async () => {
    const setTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "dark",
      setTheme,
      theme: "dark",
      themes: [],
      systemTheme: undefined,
      forcedTheme: undefined,
    });
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("applies a custom className to the label", () => {
    render(<ThemeToggle className="my-class" />);
    const label = screen.getByRole("checkbox").closest("label");
    expect(label).toHaveClass("my-class");
  });
});
