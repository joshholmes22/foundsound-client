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
  const [value, setValue] = React.useState(new Date());
  const [input, setInput] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const onClick = (event) => {
    console.log(clicked);
    // target all the values in the form use the setInput
    // create an object with the form data
  };

  // create a function to return a tag once the tag name has been entered
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" gutterBottom align="center" sx={{ m: "30px" }}>
        Create An Event
      </Typography>
      <Container component="main" maxWidth="xs">
        <Typography variant="h6" gutterBottom align="center" sx={{ m: "30px" }}>
          Add Event Information
        </Typography>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          autoComplete="off"
          component="form"
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                label="Description"
                fullWidth
                placeholder="Description"
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <Grid>
                    <DesktopDatePicker
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
                  <Grid>
                    <TextField
                      id="tag"
                      label="Tag Name"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                </Stack>
              </LocalizationProvider>

              <Button
                onClick={onClick}
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
