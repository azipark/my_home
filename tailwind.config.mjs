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
    extend: {
      fontFamily: {
        pretendard: [
          "Pretendard",
          "Pretendard Variable",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
};