import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const DemoSongUploader = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const uploadedTracks = [];

  const toggleButton = () => {
    setButtonPressed(!buttonPressed);
  };

  return (
    <Box
      sx={{
        mt: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-basic"
          label="Spotify URI"
          variant="outlined"
          sx={{ mb: "15px", width: "400px" }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={toggleButton}
        >
          Upload
        </Button>
      </Box>

      {uploadedTracks.length === 0 ? (
        <Typography sx={{ m: 2, textAlign: "center" }}>
          No Uploaded Tracks
        </Typography>
      ) : (
        <Typography sx={{ m: 2, textAlign: "center" }}>Tracks Here</Typography>
      )}
    </Box>
  );
};

export default DemoSongUploader;
