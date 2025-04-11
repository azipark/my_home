// tailwind.config.mjs
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  safelist: [
    "bg-transparent",
    "border",
    "border-purple-500/50",
    "rounded-full",
    "h-[18px]",
    "w-[18px]",
    "z-10",
    "shadow-md"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};