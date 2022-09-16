import AboutMeContainer from "../../components/AboutMe";
import * as React from "react";
import { Box, Container, margin } from "@mui/system";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

const AboutMe = () => {
  const info = {[{name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}]}
  return (
    <Box backgroundColor="#000000">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "70vh",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography
          variant="h1"
          noWrap
          component="div"
          sx={{ fontWeight: "500", fontSize: "100px", color: "#ffffff" }}
        >
          About Us
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent="space-around" flexWrap={"wrap"}>
        <AboutMeCard info={info} />
      </Box>
    </Box>
  );
};

export default AboutMe;
