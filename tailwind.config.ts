import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      const overlayUtilities: CSSRuleObject = {};
      overlayUtilities['.overlay-right'] = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
      }
      overlayUtilities['.overlay-left'] = {
        position: 'absolute',
        left: '2rem',
        width: '50%',
        bottom: '1rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
      }
      addUtilities(overlayUtilities);
    })
  ],
  theme: {
    extend: {
      fontSize: {
        'hlg': "3.25rem",
        'hmd': '2.8rem',
        'hsm': '2.2rem',
        'hxs': '1.85rem',
      },
      colors: {
        background: "#222831",
        foreground: "#EEEEEE",
        primary: "#00ADB5",
        secondary: "#3C3946",
      },
    },

  }
} satisfies Config;
