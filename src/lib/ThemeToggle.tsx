"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

export default function ThemeToggle({
  className = "swap swap-rotate",
}: {
  className?: string
}) {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  const onChange = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <label className={className}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={onChange}
          className="theme-controller"
          value={resolvedTheme}
        />

        <SunIcon className="swap-off h-4 w-4" />

        <MoonIcon className="swap-on h-4 w-4" />
      </label>
    </>
  )
}
