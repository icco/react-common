import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/lib/Logo.tsx",
    "src/lib/ThemeProvider.tsx",
    "src/lib/ThemeToggle.tsx",
    "src/lib/WebVitals.tsx",
    "src/lib/RecurseLogo.tsx",
    "src/lib/Social.tsx",
    "src/lib/XXIIVVLogo.tsx",
    "src/lib/XXIIVVRing.tsx",
    "src/lib/RecurseRing.tsx",
    "src/lib/ErrorMessage.tsx",
    "src/lib/Loading.tsx",
    "src/lib/Footer.tsx",
    "src/lib/SiteHeader.tsx",
  ],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  clean: true,
  bundle: false,
  outDir: "dist",
})
