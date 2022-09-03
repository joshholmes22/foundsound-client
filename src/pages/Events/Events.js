import * as React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";

import "./Events.css";

const Events = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"></Container>
    </ThemeProvider>
  );
};

export default Events;
