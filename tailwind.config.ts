import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const overlayUtilities = {} as any;
      overlayUtilities['.overlay'] = {
        position: 'absolute',
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
      } as any
      addUtilities(overlayUtilities);
    })
  ],
  theme: {
    extend: {
      colors: {
        background: "#222831",
        foreground: "#EEEEEE",
        primary: "#00ADB5",
        secondary: "#3C3946",
      },
    },
    
  }
} satisfies Config;
