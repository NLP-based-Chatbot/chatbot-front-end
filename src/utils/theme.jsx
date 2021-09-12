import { createTheme } from '@material-ui/core';

const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        light: "#0292BE",
        main: "#3A637E",
        dark: "#1A2C38",
        contrastText: "#fff",
      },
      secondary: {
        light: "#D3EFF8",
        main: "#BBDB9B",
        dark: "#ABC4A1",
        contrastText: "#000",
      },
    },
  });

export default theme;