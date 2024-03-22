/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-teal)",
        beige: "#f5f5dc",
      },
      textColor: {
        light: "#fefefe",
      },
      boxShadow: {
        bevel:
          "5px 5px 5px -1px rgba(5,30,120,0.16), -5px -5px 5px -1px rgba(255, 255, 255, 0.50), inset 5px 5px 5px -1px rgba(5,30,120,0.16), inset -5px -5px 5px -1px rgba(255, 255, 255, 0.50)",
        pop: "5px 5px 5px -1px rgba(5,30,120,0.16), -5px -5px 5px -1px rgba(255, 255, 255, 0.50)",
        emboss: "inset 5px 5px 5px -1px rgba(5,30,120,0.16), inset -5px -5px 5px -1px rgba(255, 255, 255, 0.50)"
      },
    },
    keyframes: {
      shimmer: {
        "50%": {
          transform: "translateX(50%)",
        },
      },
    },
  },

  plugins: [
    // ...
    import("@tailwindcss/forms"),
    import("flowbite/plugin"),
  ],
};
