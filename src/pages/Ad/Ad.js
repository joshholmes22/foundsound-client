import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useLazyQuery } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

import theme from "../../utils/themes";
import { useAuth } from "../../context/AppProvider";
import { useMutation } from "@apollo/client";
import { GET_ALL_EVENTS } from "../../graphql/queries";
import EventAdCard from "../../components/EventAdCard/EventAdCard";

const Ad = () => {
  const [getAllEvents, { data, loading, error }] = useLazyQuery(GET_ALL_EVENTS);

  const getEvents = async () => {
    await getAllEvents();

    setEventData(data.getAllEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (data) {
      setEventData(data.getAllEvents);
    }
  }, [data]);

  const { user } = useAuth();

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventData, setEventData] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [eventStep, setEventStep] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
    getValues,
  } = useForm();

  const onSubmit = (formData) => {
    // if (!imageUrl) {
    //   setError("imageUrl", {
    //     type: "manual",
    //     message: "Please select an image for event",
    //   });
    // }

    const createEventInput = {
      ...formData,
      endDate,
    };
  };

  const onChangeEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const filter = createFilterOptions();

  const artistImages = [];
  const maxSteps = artistImages.length;

  const handleNext = () => {
    if (activeStep + 1 !== maxSteps) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep(0);
    }
  };

  const handleBack = () => {
    if (activeStep - 1 !== -1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      setActiveStep(maxSteps - 1);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ m: "30px" }}
        font="bold"
      >
        Create An Advert
      </Typography>
      <Divider />
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "#F7F7F7",
          boxShadow: "#A4A3A2",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h6" gutterBottom align="center" sx={{ m: "20px" }}>
          Fill in the information to publish an advert
        </Typography>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          autoComplete="off"
          // onSubmit={handleSubmit(onSubmit)}
          component="form"
        >
          {/* event section*/}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={3}>
                <Typography
                  component="h2"
                  variant="button"
                  align="left"
                  color={theme.palette.primary.main}
                  marginBottom={1}
                  sx={{
                    fontSize: 15,
                    fontWeight: "large",
                  }}
                >
                  Step 1: Select An Event
                </Typography>

                {/* event box */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Card>
                    <CardMedia
                      component="box"
                      alt="event selector"
                      sx={{
                        width: "100vw",
                        height: "45vh",
                        position: "relative",
                        display: "table-header-group;",
                      }}
                    />
                  </Card>
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                    }}
                  >
                    <IconButton aria-label="previousImage" onClick={handleBack}>
                      <ArrowCircleLeftIcon fontSize="large" />
                    </IconButton>
                    <Card sx={{ maxWidth: "100vw" }}>
                      <EventAdCard />
                    </Card>
                    <IconButton aria-label="nextImage" onClick={handleNext}>
                      <ArrowCircleRightIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* advert form section */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <Typography
                    component="h2"
                    variant="button"
                    align="left"
                    color={theme.palette.primary.main}
                    marginBottom={1}
                    sx={{
                      fontSize: 15,
                      fontWeight: "large",
                      marginTop: "30px",
                    }}
                  >
                    Step 2: Fill In Advert Information
                  </Typography>
                  {/* render event forms here*/}
                  <TextField
                    id="advertDescription"
                    name="advertDescription"
                    label="Advert Description"
                    fullWidth
                    {...register("advertDescription", { required: true })}
                    helperText={
                      !!errors.advertDescription
                        ? "Please provide a description."
                        : ""
                    }
                    autoComplete="given-name"
                    multiline
                  />
                  <TextField
                    id="setTime"
                    label="Length of Event"
                    fullWidth
                    {...register("setTime", { required: true })}
                    helperText={
                      !!errors.setTime
                        ? "Please provide the total length of event."
                        : ""
                    }
                  />
                  <DesktopDatePicker
                    label="End Date of Event*"
                    required
                    value={endDate}
                    minDate={startDate}
                    onChange={(newEndValue) => {
                      setEndDate(newEndValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* add the solo checkbox here */}
                  {/* add the is paid checkbox here */}
                  {/* add the add the payment fee here */}
                </Stack>
              </LocalizationProvider>
            </Grid>
          </Grid>

          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Create Advert
          </LoadingButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Ad;
