// src/lib/theme/tailwind.theme.ts
import { coffeeColorPalettes } from "./colorPalettes";
import type { Config } from "tailwindcss";

const defaultPalette = coffeeColorPalettes[0].colors;

export const tailwindTheme = {
  colors: {
    primary: defaultPalette.primary,
    secondary: defaultPalette.secondary,
    accent: defaultPalette.accent,
    text: defaultPalette.text,
    // Colores base de Tailwind (necesarios)
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
  },
  fontFamily: {
    sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
    mono: ["var(--font-geist-mono)", "monospace"],
    handwritten: ["'Dancing Script'", "cursive"] // Ejemplo de fuente personalizada
  },
  extend: {
    spacing: {
      "section-gap": "clamp(3rem, 5vw, 5rem)" // Ejemplo de utilidad personalizada
    }
  }
} satisfies Partial<Config["theme"]>;