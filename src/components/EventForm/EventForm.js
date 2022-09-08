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
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import FormHelperText from "@mui/material/FormHelperText";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { useLazyQuery } from "@apollo/client";

import theme from "../../utils/themes";
import { useAuth } from "../../context/AppProvider";

import { ImageUploader } from "../ImageUploader";
import { ADDRESS_LOOKUP } from "../../graphql/queries";

const EventForm = () => {
  const [
    addressLookup,
    {
      data: addressLookupData,
      loading: addressLookupLoading,
      error: addressLookupError,
    },
  ] = useLazyQuery(ADDRESS_LOOKUP, {
    fetchPolicy: "network-only",
  });
  const { user } = useAuth();

  const [value, setValue] = useState(new Date());
  const [tags, setTags] = useState([]);
  const [fileName, setFileName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [open, setOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState();
  const [selectedAddress, setSelectedAddress] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
    getValues,
  } = useForm();

  const commonTags = [
    { name: "Out Door" },
    { name: "Disability Facilities" },
    { name: "Toilets" },
    { name: "Food & Beverage" },
  ];

  const onSubmit = (formData) => {
    if (!selectedAddressId) {
      setError("postcode", {
        type: "manual",
        message: "Please select an address",
      });
    } else {
      const createEventInput = {
        ...formData,
        venue: selectedAddressId,
        tags,
        imageUrl,
      };
      console.log(createEventInput);
    }
  };

  console.log(user);
  console.log(imageUrl);

  const handleAddressLookup = () => {
    addressLookup({
      variables: {
        postcode: getValues("postcode"),
      },
    });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAddressSelection = (event) => {
    setSelectedAddressId(event.currentTarget.id);
    const { fullAddress } = addressLookupData?.addressLookup?.addresses.find(
      (each) => each._id === event.currentTarget.id
    );
    setSelectedAddress(fullAddress);
    clearErrors("postcode");
    handleCloseModal();
  };

  const filter = createFilterOptions();

  useEffect(() => {
    if (addressLookupData?.addressLookup) {
      handleOpenModal();
    }
  }, [addressLookupData]);

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ m: "30px" }}
        font="bold"
      >
        Create An Event
      </Typography>
      <Divider />
      <Container component="main" maxWidth="xs">
        <Dialog open={open} onClose={handleCloseModal}>
          <DialogTitle>Select Address</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please select one address from the following list:
            </DialogContentText>
            <List>
              {addressLookupData?.addressLookup?.addresses?.map((address) => {
                return (
                  <ListItem disablePadding key={address._id}>
                    <ListItemButton
                      onClick={handleAddressSelection}
                      id={address._id}
                    >
                      <ListItemText primary={address.fullAddress} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h6" gutterBottom align="center" sx={{ m: "30px" }}>
          Add Event Information
        </Typography>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          component="form"
        >
          <Grid container spacing={3}>
            {/* event details */}
            <Grid item xs={12}>
              <Stack spacing={3}>
                <Typography
                  component="h2"
                  variant="button"
                  align="left"
                  color="#113476"
                  marginBottom={1}
                  sx={{
                    fontSize: 15,
                    fontWeight: "large",
                  }}
                >
                  Event Details
                </Typography>
                <TextField
                  id="name"
                  name="name"
                  label="Event Name"
                  fullWidth
                  {...register("name", { required: true })}
                  helperText={
                    !!errors.name ? "Please provide an event name." : ""
                  }
                  autoComplete="given-name"
                />
                <TextField
                  id="description"
                  label="Description"
                  fullWidth
                  {...register("description", { required: true })}
                  helperText={
                    !!errors.description
                      ? "Please provide an event description."
                      : ""
                  }
                  placeholder="Description"
                  multiline
                />
              </Stack>
            </Grid>

            {/* venue details */}
            <Grid item xs={12}>
              <Stack spacing={3}>
                <Typography
                  component="h2"
                  variant="button"
                  align="left"
                  color="#113476"
                  marginBottom={1}
                  sx={{
                    fontSize: 15,
                    fontWeight: "large",
                  }}
                >
                  Venue Details
                </Typography>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Postcode
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    // value={postcode}
                    // onChange={handleOnChangeAddress}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleAddressLookup}
                          onMouseDown={handleAddressLookup}
                          edge="end"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    {...register("postcode", {
                      required: true,
                    })}
                  />
                  {!!errors.postcode && (
                    <FormHelperText error={!!errors.postcode}>
                      {errors.postcode?.message}
                    </FormHelperText>
                  )}
                  {selectedAddress && (
                    <Typography component="div" variant="caption" align="left">
                      {selectedAddress}
                    </Typography>
                  )}
                </FormControl>
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
                    option.name === value.name
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
              </Stack>
            </Grid>

            {/* schedule details */}
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <Typography
                    component="h2"
                    variant="button"
                    align="left"
                    color="#113476"
                    marginBottom={1}
                    sx={{
                      fontSize: 15,
                      fontWeight: "large",
                    }}
                  >
                    Schedule Details
                  </Typography>
                  <DesktopDatePicker
                    required
                    id="startDate"
                    label="Start Date of Event*"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    {...register("startDate")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopDatePicker
                    required
                    id="endDate"
                    label="End Date of Event*"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    {...register("endDate")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TimePicker
                    required
                    id="time"
                    label="Time of Event*"
                    value={value}
                    {...register("time")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>

            {/* additional info */}
            <Grid item xs={12}>
              <Stack spacing={3}>
                <Typography
                  component="h2"
                  variant="button"
                  align="left"
                  color="#113476"
                  marginBottom={1}
                  sx={{
                    fontSize: 15,
                    fontWeight: "large",
                  }}
                >
                  Additional Information
                </Typography>
                <ImageUploader
                  id="imageUrl"
                  fullWidth
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  setFileName={setFileName}
                  dirName={`${user.id}`}
                  helperText={
                    !imageUrl ? "Please upload an image for the event." : ""
                  }
                />
              </Stack>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EventForm;
