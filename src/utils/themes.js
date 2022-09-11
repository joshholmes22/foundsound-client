import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Montserrat" },
  palette: {
    primary: { main: "#4A69FF" },
    secondary: { light: "#FBFAFA", main: "#F7F5F5" },
  },
});

export default theme;
