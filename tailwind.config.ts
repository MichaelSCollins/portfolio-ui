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
      const cssRulesObj: CSSRuleObject = {};
      cssRulesObj['.card-container'] = {
        display: 'grid',
        gap: '20px'
      }
      cssRulesObj['.card'] = {
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }
      cssRulesObj['.overlay-right'] = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right'
      }
      cssRulesObj['.big-overlay-right'] = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        height: '100%',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right'
      }

      cssRulesObj['.big-overlay-right'] = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        height: '100%',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right'
      }
      cssRulesObj['.overlay-left'] = {
        position: 'absolute',
        left: '2rem',
        width: '50%',
        bottom: '1rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
      }
      addUtilities(cssRulesObj);
    })
  ],
  theme: {
    extend: {
      fontSize: {
        'hlg': "3.25rem",
        'hmd': '2.8rem',
        'hsm': '2.2rem',
        'hxs': '1.85rem',
        'h2xs': '1.55rem'
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
