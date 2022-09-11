import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          className="home-title"
          sx={{ color: "#ffffff", fontSize: "10vw", fontWeight: "600" }}
        >
          FOUNDSOUND
        </Typography>
        <Typography
          className="home-para"
          sx={{ color: "#ffffff", fontSize: "2vw", fontWeight: "600" }}
        >
          Discover underground artists and upcoming events
        </Typography>
      </Box>
    </>
  );
};

export default HeroBanner;
