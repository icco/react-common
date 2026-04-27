"use client";

/**
 * Client-side theme provider and hook, re-exported so apps only need `@icco/react-common`
 * (and the `@wrksz/themes` peer). For root layouts, use `ThemeProvider` from `./ThemeProvider`.
 *
 * @see https://themes.wrksz.dev
 */
export { ClientThemeProvider, useTheme } from "@wrksz/themes/client";
