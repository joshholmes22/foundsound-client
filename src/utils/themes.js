import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Montserrat" },
  palette: {
    primary: { main: "#4A69FF" },
    secondary: { light: "#FBFAFA", main: "#F7F5F5" },
    success: { main: "#1136ed" },
  },
});

export default theme;
