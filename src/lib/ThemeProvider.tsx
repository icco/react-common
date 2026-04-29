import {
  type DefaultTheme,
  ThemeProvider as WrkszThemeProvider,
  type ThemeProviderProps,
} from "@wrksz/themes/next";

/**
 * Async Server Component for Next.js root layouts. Wraps `@wrksz/themes/next`
 * with `storage="hybrid"` and `disableTransitionOnChange` defaults to avoid
 * SSR theme flash. Override either by passing the prop.
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
