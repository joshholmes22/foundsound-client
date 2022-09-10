import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const ArtistBanner = ({ bannerImg }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1522745287160-f12721561e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
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
  );
};

export default ArtistBanner;
