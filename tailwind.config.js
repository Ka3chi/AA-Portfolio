const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : "#E0E1DD",
        'background1' : "#D9D9D9",
        
      },
    },
  },
  plugins: [],
});