import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./AccountTypeCard.css";

const AccountTypeCard = ({ imageUrl, altText, overlayText }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        backgroundColor: "transparent",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={altText}
          sx={{ borderRadius: "15px" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "95%",
            bgcolor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", width: "100%" }}>
            {overlayText}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AccountTypeCard;
