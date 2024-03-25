/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./Components/**/*.{html,js,ts,tsx}",
    "./layers/**/*.{html,js,ts,tsx}",
    "./utils/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xss: "380px",
        xs: "500px",
        "xs+": "550px",
        sm: "640px",
        md: "768px",
        "md+": "900px",
        lg: "1024px",
        "lg+": "1120px",
        xl: "1280px",
        "xl+": "1400px",
        "2xl": "1536px",
        break: "1670px",
        skills_break: "1800px",
      },
      boxShadow: {
        work: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 -4px 6px 1px rgb(0 0 0 / 0.1), 0 -2px 4px 2px rgb(0 0 0 / 0.1)",
        skills:
          "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4), 0 -3px 5px -1px rgb(0 0 0 / 0.5), 0 -1px 3px -1px rgb(0 0 0 / 0.3)",
      },
      textColor: {
        skin: {
          light: "var(--color-text-base)",
          "light-hover": "var(--color-text-base-inverted)",
        },
        shade: {
          dark: `var(--color-text-muted)`,
          "dark-hover": `var(--color-text-muted-inverted)`,
        },
      },

      backgroundColor: {
        skin: {
          background: "var(--color-fill)",
          card: "var(--color-card-base-primary)",
          text: "var(--color-text-base)",
          "text-hover": "var(--color-text-base-inverted)",
          btn: `var(--color-button-base)`,
          "btn-hover": `var(--color-button-base-hover)`,
        },
        shade: {
          card: "var(--color-card-base-secondary)",
          text: `var(--color-text-muted)`,
          "text-hover": `var(--color-text-muted-inverted)`,
          btn: "var(--color-button-muted)",
          "btn-hover": "var(--color-button-muted-hover)",
        },
      },
      fontFamily: {
        Neue: ["BebasNeue"],
        bluu: ["BluuNext"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
        rubberBand: {
          from: {
            transform: "scale3d(1,1,1)",
          },
          "30%": {
            transform: "scale3d(1.25,0.75,1)",
          },
          "40%": {
            transform: "scale3d(0.75,1.25,1)",
          },
          "50%": {
            transform: "scale3d(1.15,0.85,1)",
          },
          "65%": {
            transform: "scale3d(0.95,1.05,1)",
          },
          "75%": {
            transform: "scale3d(1.05,0.95,1)",
          },
          to: {
            transform: "scale3d(1,1,1)",
          },
        },
        rubberBand2: {
          from: {
            transform: "scale3d(1,1,1)",
          },
          "30%": {
            transform: "scale3d(1,0.75,1.25)",
          },
          "40%": {
            transform: "scale3d(1,1.25,0.75)",
          },
          "50%": {
            transform: "scale3d(1,0.85,1.05)",
          },
          "65%": {
            transform: "scale3d(1,1.05,0.85)",
          },
          "75%": {
            transform: "scale3d(1,0.95,1.05)",
          },
          to: {
            transform: "scale3d(1,1,1)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        rubberBand: "rubberBand 1s",
        rubberBand2: "rubberBand2 1s",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
