import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "24px 24px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
};
