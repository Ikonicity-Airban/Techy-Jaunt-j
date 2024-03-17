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
        beige: "#f5f5dc"
      },
      textColor: {
        light: "#fefefe",
      },
    },
  },

  plugins: [
    // ...
    import("@tailwindcss/forms"),
    import("flowbite/plugin"),
  ],
};
