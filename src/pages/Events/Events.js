import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";
import "./Events.css";

const Events = () => {
  // const [value, setValue] = React.useState("Controlled");
  const [value, setValue] = React.useState(new Date());

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

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <Grid>
                    <DesktopDatePicker
                      xs={{ m: "20px" }}
                      required
                      label="Date of Event*"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid>
                    <TimePicker
                      required
                      label="Time of Event*"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                </Stack>
              </LocalizationProvider>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Event
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Events;
