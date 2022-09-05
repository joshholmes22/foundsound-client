import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import { WithContext as ReactTags } from "react-tag-input";

import theme from "../../utils/themes";
import "./Events.css";

const Events = () => {
  const [value, setValue] = useState(new Date());
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

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

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  // validate form
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
                    <TextField
                      id="imageUrl"
                      label="ImageUrl"
                      variant="outlined"
                      fullWidth
                      {...register("imageUrl")}
                      helperText={
                        !!errors.eventName
                          ? "Please upload an image for the event."
                          : ""
                      }
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <ReactTags
                      sx={{ m: "50px" }}
                      inline
                      id="renderTags"
                      fullWidth
                      label="Tag Name"
                      variant="outlined"
                      tags={tags}
                      handleDelete={handleDelete}
                      handleAddition={handleAddition}
                      handleDrag={handleDrag}
                      {...register("renderTags")}
                    />
                  </Grid> */}
                  <Grid>
                    <Autocomplete
                      multiple
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tags"
                          placeholder="Select Tags"
                        />
                      )}
                      id="tags"
                      options={commonTags}
                      getOptionLabel={(option) => option.name}
                      defaultValue={[commonTags[1]]}
                      isOptionEqualToValue={(option, value) =>
                        option.name == value.name
                      }
                      {...register("tags")}
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
