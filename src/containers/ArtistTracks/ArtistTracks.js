import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const ArtistTracks = ({ demoSongs }) => {
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
        backgroundColor: "#292525",
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
              sx={{ backgroundColor: "#fff" }}
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
              sx={{ backgroundColor: "#fff" }}
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
