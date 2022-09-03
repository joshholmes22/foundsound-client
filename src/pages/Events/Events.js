import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";

import "./Events.css";

const Events = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" gutterBottom align="center" sx={{ m: "20px" }}>
        Create An Event
      </Typography>
      <Container component="main" maxWidth="xs">
        <Typography variant="h6" gutterBottom align="center" sx={{ m: "20px" }}>
          Add Event Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="EventName"
              name="EventName"
              label="Event Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Events;
