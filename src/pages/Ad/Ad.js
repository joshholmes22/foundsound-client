import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import theme from "../../utils/themes";
import EventAdCard from "../../components/EventAdCard";
import AdForm from "../../components/AdForm/AdForm";
import AdCard from "../../components/AdCard/AdCard";

const steps = ["Step 1", " Step 2", "Step 3"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <EventAdCard />;
    case 1:
      return <AdForm />;
    case 2:
      return <AdCard />;
    default:
      throw new Error("Unknown step");
  }
};

const Ad = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* private Navbar */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Publish an Advert
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stack>
            {/* final message */}
            {activeStep === steps.length ? (
              <Stack>
                <Typography variant="h5" gutterBottom align="center">
                  Successfully Publish an Ad
                </Typography>
                <Typography variant="subtitle1" align="center">
                  You have created an Ad for your selected Event
                </Typography>
              </Stack>
            ) : (
              <Stack>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Publish" : "Next"}
                  </Button>
                </Box>
              </Stack>
            )}
          </Stack>
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
};

export default Ad;
