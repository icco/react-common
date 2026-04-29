# react-common

A set of common components I use on my sites.

Theme stack is [@wrksz/themes](https://themes.wrksz.dev/) (Next.js 16+); add it as a dependency alongside this package. Import theme primitives from `@icco/react-common` only (no direct `@wrksz/themes` imports required):

- **`ThemeProvider`** — `@icco/react-common` or `@icco/react-common/ThemeProvider`; thin wrapper around `@wrksz/themes/next` (async Server Component for root `layout.tsx`).
- **`ClientThemeProvider`** / **`useTheme`** — `@icco/react-common` or `@icco/react-common/ClientThemeProvider`; for `"use client"` trees (nested providers, custom toggles).

## Zero-flash defaults

`ThemeProvider` ships with two opinionated defaults that solve the SSR theme flash and the toggle flicker:

- `storage="hybrid"` — the theme is stored in a cookie (so `@wrksz/themes/next` reads it server-side and emits the correct `<html>` class on first paint, eliminating the flash) and mirrored to `localStorage` for cross-tab sync.
- `disableTransitionOnChange={true}` — suppresses CSS transitions during attribute swaps so the theme toggle is crisp.

Both defaults can be overridden by passing the prop explicitly:

```tsx
<ThemeProvider storage="localStorage" disableTransitionOnChange={false}>
  {children}
</ThemeProvider>
```

Other supported storage values: `"localStorage"`, `"sessionStorage"`, `"cookie"`, `"none"`. See the [@wrksz/themes API docs](https://themes.wrksz.dev/) for the full prop reference.

Remember to keep `suppressHydrationWarning` on `<html>`:

```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </body>
</html>
```
