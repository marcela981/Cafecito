// tailwind.config.ts
import type { Config } from "tailwindcss";
import { coffeeColorPalettes } from "./src/lib/theme/colorPalettes"; // Ruta corregida

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: coffeeColorPalettes[0].colors.primary,
          300: coffeeColorPalettes[0].colors.secondary,
          900: coffeeColorPalettes[0].colors.accent
        }
      }
    }
  },
  plugins: [],
} satisfies Config;