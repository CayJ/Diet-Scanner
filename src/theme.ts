import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2",
      light: "#7cb6f0",
      dark: "#2b68b0",
    },
    secondary: {
      main: "#de5b3d",
      light: "#ff8e6a",
      dark: "#a53810",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333", // primary text color
      secondary: "#555555", // secondary text color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#f4f4f4",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "4px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#2b68b0",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#a53810",
          },
        },
      },
    },
  },
});

export default theme;
