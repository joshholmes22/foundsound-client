import { useState } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IconButton from "@mui/material/IconButton";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import artistImage1 from "../../assets/images/profileTemplate/6J7A5171.jpg";
import artistImage2 from "../../assets/images/profileTemplate/6J7A5173.jpg";

const ArtistBanner = () => {
  const artistImages = [bannerImg, artistImage1, artistImage2];
  const maxSteps = artistImages.length;
  const [activeStep, setActiveStep] = useState(0);
  const imageUrl =
    "https://images.unsplash.com/photo-1522745287160-f12721561e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="artist banner"
          sx={{
            width: "100vw",
            height: "45vh",
            filter: "blur(2px)",
            position: "relative",
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
          <CardMedia
            component="img"
            height="350vh"
            image={artistImages[activeStep]}
            alt="artist banner"
            sx={{ height: "45vh", width: "auto" }}
          />
        </Card>
        <IconButton aria-label="nextImage" onClick={handleNext}>
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ArtistBanner;
