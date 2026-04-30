import {
  type DefaultTheme,
  ThemeProvider as WrkszThemeProvider,
  type ThemeProviderProps,
} from "@wrksz/themes/next";

/**
 * Async Server Component for Next.js root layouts. Wraps `@wrksz/themes/next`
 * with `attribute="data-theme"`, `storage="hybrid"`, and
 * `disableTransitionOnChange` defaults to play nicely with daisyUI/Tailwind
 * `[data-theme=*]` selectors and avoid SSR theme flash. Override any default
 * by passing the prop.
 *
 * @see https://themes.wrksz.dev
 */
export function ThemeProvider<Themes extends string = DefaultTheme>(
  props: ThemeProviderProps<Themes>
) {
  return (
    <WrkszThemeProvider<Themes>
      attribute="data-theme"
      storage="hybrid"
      disableTransitionOnChange
      {...props}
    />
  );
}
