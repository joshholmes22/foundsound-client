import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

import theme from "../../utils/themes";
import { useAuth } from "../../context/AppProvider";
import { useMutation } from "@apollo/client";
import { GET_ALL_EVENTS_FOR_OWNER } from "../../graphql/queries";
import { CREATE_ADVERT } from "../../graphql/mutations";
import "./Ad.css";
import EventAdCard from "../../components/EventAdCard/EventAdCard";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";

const Ad = ({ details }) => {
  const { data, loading, error } = useQuery(GET_ALL_EVENTS_FOR_OWNER);
  const [createAdvert, { data: advertData }] = useMutation(CREATE_ADVERT);
  console.log(advertData);

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (advertData?.createAdvert?.id) {
      navigate("/ads", { replace: true });
    }
  }, [advertData, navigate]);

  const [startDate, setStartDate] = useState(new Date());
  const [expires, setExpiryDate] = useState(new Date());
  const [amount, setAmount] = useState();
  const [checked, setChecked] = useState(false);
  const [soloChecked, setSoloChecked] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(
    data?.getAllEventsForOwner[0]?.id
  );

  const onSubmit = (formData) => {
    const createAdvertInput = {
      ...formData,
      event: currentEventId,
      expires,
      isPaid: checked,
      solo: soloChecked,
    };
    console.log(createAdvertInput);
    createAdvert({ variables: { createAdvertInput } });
  };

  const onChangeEndDate = (newValue) => {
    setExpiryDate(newValue);
  };

  // target the amount entered
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const filter = createFilterOptions();

  const handleCheckedPaid = (event) => {
    event.preventDefault();
    setChecked(!checked);
  };

  const handleCheckedSolo = (event) => {
    event.preventDefault();
    setSoloChecked(!soloChecked);
  };

  const handleChangeDate = (newValue) => {
    setExpiryDate(newValue);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
    getValues,
  } = useForm();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <EventOrganiserNavBar />
        <Box sx={{ marginTop: "50px" }}>
          {advertData && (
            <>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert sx={{ marginTop: "10px" }} severity="success">
                  Successfully Created An Event
                </Alert>
              </Stack>
            </>
          )}
          {!advertData && (
            <>
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{ marginTop: "30px" }}
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
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  align="center"
                  sx={{ m: "20px" }}
                >
                  Fill in the information to publish an advert
                </Typography>
                <Box
                  sx={{
                    marginTop: 5,
                  }}
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                  component="form"
                >
                  {/* event section*/}
                  <Grid container spacing={12}>
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
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                          }}
                        >
                          {data?.getAllEventsForOwner.length === 0 && (
                            <Alert severity="info">
                              No events to select. Please create an event
                            </Alert>
                          )}
                          {data?.getAllEventsForOwner.map((event) => (
                            <EventAdCard
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                              }}
                              key={event.id}
                              details={event}
                              setCurrentEventId={setCurrentEventId}
                            />
                          ))}
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
                          <TextField
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            {...register("description", { required: true })}
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
                            label="Time Length of Event"
                            fullWidth
                            {...register("setTime", { required: true })}
                            helperText={
                              !!errors.setTime
                                ? "Please provide the total length of event."
                                : ""
                            }
                          />
                          <DesktopDatePicker
                            label="Booking Due Date*"
                            required
                            value={expires}
                            onChange={handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Solo Band"
                              value={soloChecked}
                              onChange={handleCheckedSolo}
                            />
                            <FormControlLabel
                              id="isPaid"
                              value={checked}
                              {...register("isPaid")}
                              control={<Checkbox />}
                              label="Paid Event"
                              onChange={handleCheckedPaid}
                            />
                            {checked && (
                              <>
                                <TextField
                                  id="amount"
                                  value={amount}
                                  onChange={handleChange}
                                  label="Payment Fee"
                                  {...register("fee")}
                                ></TextField>
                              </>
                            )}
                          </FormGroup>
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
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Ad;
