/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-servises": "url('/Public/images/')",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "sans-serif"],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        hexagon:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px white", // Adjust stroke size and color
          "text-stroke": "1px white",
        },
        ".text-transparent": {
          color: "transparent",
        },
      });
    },
  ],
};
