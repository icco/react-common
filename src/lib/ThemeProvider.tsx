import {
  type DefaultTheme,
  ThemeProvider as WrkszThemeProvider,
  type ThemeProviderProps,
} from "@wrksz/themes/next";

/**
 * Async Server Component for Next.js root layouts. Do not import this entry from a file
 * marked `"use client"` — use `ClientThemeProvider` from `@wrksz/themes/client` instead.
 *
 * Defaults `storage="hybrid"` so the server reads the theme cookie and emits the correct
 * `<html>` class on first paint (no flash), with a `localStorage` mirror for cross-tab sync.
 * Defaults `disableTransitionOnChange={true}` to avoid CSS transition flicker during toggles.
 * Either default can be overridden by passing the prop explicitly.
 *
 * @see https://themes.wrksz.dev
 */
export function ThemeProvider<Themes extends string = DefaultTheme>(
  props: ThemeProviderProps<Themes>
) {
  return (
    <WrkszThemeProvider<Themes>
      storage="hybrid"
      disableTransitionOnChange
      {...props}
    />
  );
}
