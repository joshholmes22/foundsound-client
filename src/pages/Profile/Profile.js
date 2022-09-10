import PrivateNavBar from "../../components/PrivateNavBar";

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";

const Profile = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1522745287160-f12721561e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
  return (
    <div>
      <PrivateNavBar />
      <Box
        sx={{
          backgroundColor: "rgb(0, 0, 0, 0.8)",
          zIndex: "2",
          padding: "15px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Josh Holmes
        </Typography>
      </Box>
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
          }}
        >
          <Card sx={{ maxWidth: "100vw" }}>
            <CardMedia
              component="img"
              height="350vh"
              image={bannerImg}
              alt="artist banner"
              sx={{ height: "45vh", width: "auto" }}
            />
          </Card>
        </Box>
      </Box>

      <iframe
        // style="border-radius:12px"
        title="Song"
        src="https://open.spotify.com/embed/track/10RUyNnakybrdAhIm65Lkx?utm_source=generator&theme=0"
        width="30%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Profile;
