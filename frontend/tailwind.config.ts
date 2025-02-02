import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          main: "#ffffff",
          secondary: "#f9fafb",
          tertiary: "#eff6ff",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          blue: "#2563eb",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        text: {
          primary: "#111827",
          secondary: "#374151",
          tertiary: "#6b7280",
        },
        success: "#16a34a",
        error: "#dc2626",
        warning: "#ca8a04",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".blue-gradient-btn": {
          backgroundImage: "linear-gradient(to bottom right, #2563eb, #22d3ee)",
          border: "none",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
        },
        ".silver-gradient-btn": {
          backgroundImage: "linear-gradient(to bottom right, white, #e5e7eb)",
          border: "none",
          color: "#1f2937", // text-gray-800
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
        },
        ".gray-gradient-btn": {
          backgroundImage:
            "linear-gradient(to bottom right, #111827 , #1f2937 )",
          border: "none",
          color: "white", // text-gray-800
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
