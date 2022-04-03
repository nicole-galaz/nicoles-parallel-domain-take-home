import { createTheme } from "@mui/material/styles";

import colors from "./colors";

const mui = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.textDark,
    },
  },
  typography: {
    fontFamily: "ProximaNova, Helvetica, Arial, serif",
    h1: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "2.8rem",
      color: colors.textLight,
      lineHeight: 1,
      letterSpacing: "-1px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.8rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-0.75px",
    },
    h3: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.6rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h4: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.5rem",
      color: colors.textLight,
      lineHeight: 1.2,
      fontWeight: 300,
    },
    body1: {
      color: colors.textLight,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "1.05rem",
      fontWeight: 500,
      letterSpacing: "0.2px",
      color: colors.textLight,
    },
    subtitle1: {
      color: colors.primary,
      textTransform: "uppercase",
      letterSpacing: "2.25px",
      fontWeight: 900,
      fontSize: "0.875rem",
    },
    subtitle2: {
      color: colors.textLight,
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    menuItem: {
      textTransform: "uppercase",
      fontWeight: 400,
      letterSpacing: "0.5px",
      fontSize: "0.8rem",
      lineHeight: 1,
    },
    caption: {
      fontWeight: 500,
      letterSpacing: "1px",
      fontSize: "0.6rem",
      lineHeight: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          paddingTop: "80px",
          background: colors.secondaryVariant2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: `1px solid ${colors.secondaryVariant1}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14.5,
        },
        underline: {
          "&:before": {
            content: "none",
          },
          "&:after": {
            content: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "14px",
          "&.Mui-disabled": {
            color: "#9b9a9a",
            WebkitTextFillColor: "#9b9a9a",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: colors.textLight,
        },
        icon: {
          color: colors.textDark,
        },
        select: {
          padding: "8px",
          color: colors.textLight,
          option: {
            backgroundColor: `${colors.secondaryVariant1} !important`,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: `${colors.secondaryVariant1} !important`,
          "&.Mui-selected": {
            backgroundColor: `${colors.secondaryVariant2}`,
          },
          "&.Mui-selected:hover": {
            backgroundColor: `${colors.secondaryVariant2}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: `${colors.secondaryVariant1} !important`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.6rem",
          fontWeight: "bold",
          borderRadius: "30px",
          letterSpacing: "1px",
          padding: "12px 28px",
        },
        outlinedPrimary: {
          borderWidth: "2px",
          color: colors.primary,

          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default mui;
