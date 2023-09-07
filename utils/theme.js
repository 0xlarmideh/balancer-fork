import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      light: "",
      phanes: "#1BD19C",
      lightBg: "#172622",
      darkBg: "#070E0C",
      lightText: "#EAFFF9",
      lighterText: "#A4C8BE",
      darkText: "#010D09",
    },
  },
});

export default customTheme;
