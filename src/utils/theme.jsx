import { createTheme } from '@material-ui/core';

export const fonts = {
  Poppins: "Poppins"
}

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    type: 'light',
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

theme.typography.h6 = {
  [theme.breakpoints.up('md')]: {
    fontSize: "1.3rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "1.2rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.0rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "0.5rem",
    fontWeight: 500
  },
}

theme.typography.h1 = {
  [theme.breakpoints.up('md')]: {
    fontSize: "5.5rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "4.0rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "3.8rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "3.2rem",
    fontWeight: 500
  },
}

theme.typography.h3 = {
  [theme.breakpoints.up('md')]: {
    fontSize: "2.5rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.8rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "1.5rem",
    fontWeight: 500
  },
}

theme.typography.body1 = {
  [theme.breakpoints.up('md')]: {
    fontSize: "1.0rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.9rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.8rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "0.7rem",
    fontWeight: 500
  },

  
}

theme.typography.subtitle2 = {
  [theme.breakpoints.up('md')]: {
    fontSize: "0.9rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.8rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.7rem",
    fontWeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "0.6rem",
    fontWeight: 500
  },
}

export default theme;