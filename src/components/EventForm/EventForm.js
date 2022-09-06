import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";
import { ImageUploader } from "../ImageUploader";

const EventForm = () => {
  const [value, setValue] = useState(new Date());
  const [tags, setTags] = useState([]);
  const [fileName, setFileName] = useState();
  const [imageUrl, setImageUrl] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const commonTags = [
    { name: "Out Door" },
    { name: "Disability Facilities" },
    { name: "Toilets" },
    { name: "Food & Beverage" },
  ];

  const onSubmit = (data) => {
    console.log({ ...data, tags });
  };

  const filter = createFilterOptions();

  useEffect(() => {
    console.log(tags);
  }, [commonTags]);

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
          onSubmit={handleSubmit(onSubmit)}
          component="form"
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="eventName"
                name="EventName"
                label="Event Name"
                fullWidth
                {...register("eventName", { required: true })}
                helperText={
                  !!errors.eventName ? "Please provide an event name." : ""
                }
                autoComplete="given-name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                fullWidth
                {...register("description", { required: true })}
                helperText={
                  !!errors.eventName
                    ? "Please provide an event description."
                    : ""
                }
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
                      id="date"
                      label="Date of Event*"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      {...register("date")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid>
                    <TimePicker
                      required
                      id="time"
                      label="Time of Event*"
                      value={value}
                      {...register("time")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>

                  <Grid>
                    <Autocomplete
                      multiple
                      filterSelectedOptions
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some(
                          (option) => inputValue === option.name
                        );
                        if (inputValue !== "" && !isExisting) {
                          filtered.push({
                            inputValue,
                            name: `${inputValue}`,
                          });
                        }

                        return filtered;
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tags"
                          placeholder="Select Tags"
                        />
                      )}
                      id="tags"
                      {...register("tags")}
                      options={commonTags}
                      getOptionLabel={(option) => option.name}
                      defaultValue={[commonTags[1]]}
                      isOptionEqualToValue={(option, value) =>
                        option.name == value.name
                      }
                      freeSolo
                      onChange={(event, newValue) => {
                        if (typeof newValue === "string") {
                          setTags({
                            name: newValue,
                          });
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          setTags({
                            name: newValue.inputValue,
                          });
                        } else {
                          setTags(newValue);
                        }
                      }}
                    />
                  </Grid>
                </Stack>
              </LocalizationProvider>

              <Grid container spacing={3}>
                <Grid item xs={12} marginTop={3}>
                  <ImageUploader
                    id="imageUrl"
                    {...register("imageUrl", {
                      required: true,
                    })}
                    fullWidth
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    setFileName={setFileName}
                    dirName="`{}`/`{}`"
                    helperText={
                      !!errors.eventName
                        ? "Please upload an image for the event."
                        : ""
                    }
                  />
                </Grid>
              </Grid>

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

export default EventForm;
