import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: { 
        'custom-xl': { 'min': '1280px' }, 
        'custom-lg': { 'min': '1024px', 'max': '1279px' }, 
        'custom-md': { 'min': '900px', 'max': '1023px' }, 
        'custom-sm': { 'min': '800px', 'max': '899px' }, 
        'custom-xs': { 'min': '700px', 'max': '799px' }, 
        'custom-xxs': { 'min': '500px', 'max': '699px' }, 
        'custom-tiny': { 'min': '400px', 'max': '499px' }, 
        'custom-mini': { 'min': '200px', 'max': '399px' }, 
      },
    },
  },
  plugins: [],
} satisfies Config;
