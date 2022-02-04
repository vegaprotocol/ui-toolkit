module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica neue", "Helvetica", "arial", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
      pixel: [
        "NeuePixelGrotesk",
        "Helvetica neue",
        "Helvetica",
        "arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {},
      boxShadow: {
        "callout-default": "3px 3px 0 #fff",
        "callout-success": "3px 3px 0 #26ff8a",
        "callout-error": "3px 3px 0 #ff261a",
        "callout-action": "3px 3px 0 #daff0d",
        "callout-warn": "3px 3px 0 #d9822b",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
