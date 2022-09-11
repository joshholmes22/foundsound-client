import { Typography } from "@mui/material";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <>
      <Typography
        className="home-title"
        m={"60px"}
        sx={{ color: "#ffffff", fontSize: "10vw", fontWeight: "600" }}
      >
        FOUNDSOUND
      </Typography>
      <Typography
        className="home-para"
        mt={2}
        sx={{ color: "#ffffff", fontSize: "2vw", fontWeight: "600" }}
      >
        Discover underground artists and upcoming events
      </Typography>
    </>
  );
};

export default HeroBanner;
