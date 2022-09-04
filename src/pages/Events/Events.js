import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";
import "./Events.css";

const Events = () => {
  // const [value, setValue] = React.useState("Controlled");
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              required
              id="EventDescription"
              label="Event Description"
              fullWidth
              placeholder="Enter Event Description"
              multiline
            />
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Events;
