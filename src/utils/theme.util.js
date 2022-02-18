export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#8C673B",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C99B5C",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#2B2B2B",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: pxToRem(96),
      ...responsiveFonts({ sm: 48, md: 56, lg: 64 }),
    },
  },
};

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFonts({ sm, md, lg }) {
  return {
    "@media (max-width:1200px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:600px)": {
      fontSize: pxToRem(sm),
    },
  };
}
