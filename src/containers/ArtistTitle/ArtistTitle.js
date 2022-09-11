import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const ArtistTitle = ({ title }) => {
  const [follow, setFollow] = useState(false);

  const followToggle = () => {
    console.log(follow);
    setFollow(!follow);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(0, 0, 0, 0.8)",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
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
          marginRight: "10px",
        }}
      >
        {title}
      </Typography>
      {!follow ? (
        <Button
          variant="contained"
          size="10px"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: "#1DB954" }}
          onClick={followToggle}
        >
          Follow
        </Button>
      ) : (
        <Button
          variant="contained"
          size="10px"
          sx={{ backgroundColor: "#1DB050" }}
          onClick={followToggle}
        >
          Following
        </Button>
      )}
    </Box>
  );
};

export default ArtistTitle;
