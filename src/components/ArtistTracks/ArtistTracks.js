import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const ArtistTracks = () => {
  const demoSongs = [
    "2knlNLtT7XdKadSzBjycVQ",
    "1BRQhOPY3QtY8hcvafhvjq",
    "24qK0O65X0l6TViKiKFbq2",
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = demoSongs.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#14213d",
      }}
    >
      <Typography sx={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}>
        Music
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "40%",
        }}
      >
        <iframe
          title="Song"
          src={`https://open.spotify.com/embed/track/${demoSongs[activeStep]}?utm_source=generator&theme=0`}
          width="100%"
          height="380"
          frameBorder="0"
        ></iframe>
      </Box>
      <Box sx={{ width: "30%" }}>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          sx={{ backgroundColor: "transparent", color: "#fff" }}
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default ArtistTracks;
