const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [],
  theme: {
    extend: {
      fontfamily:{
        poppins: ["Poppins"],
        Curly: ["Courgette"]
      },
      colors: {
        dark: "#0d117"
      }
    },
    backgroundImage:{
      wrapperBg:"url('assets/images/wrapperBackground.svg')"

    },
    container: {
      screens:{
        sm:"640px",
        md:"767px",
        lg:"1140px",
        xl:"1440px",
        "2x1":"1080px"
  
      }
    },
    screens: {
      'sm': {max:'639px'},
      // => @media (min-width: 640px) { ... }

      'md': {max:'769px'},
      // => @media (min-width: 768px) { ... }

      'lg': {max:'1023px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {max:'1279px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {max:'1535px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
});