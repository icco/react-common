# react-common

A set of common components I use on my sites.

Theme stack is [@wrksz/themes](https://themes.wrksz.dev/) (Next.js 16+); add it as a dependency alongside this package. Import theme primitives from `@icco/react-common` only (no direct `@wrksz/themes` imports required):

- **`ThemeProvider`** — `@icco/react-common` or `@icco/react-common/ThemeProvider`; thin wrapper around `@wrksz/themes/next` (async Server Component for root `layout.tsx`). Defaults `storage="hybrid"` and `disableTransitionOnChange` to avoid SSR theme flash; pass either prop to override.
- **`ClientThemeProvider`** / **`useTheme`** — `@icco/react-common` or `@icco/react-common/ClientThemeProvider`; for `"use client"` trees (nested providers, custom toggles).
