import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";

const DemoSongUploader = () => {
  const uploadedTracks = [];
  return (
    <Box
      sx={{
        mt: "25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" startIcon={<AddIcon />}>
        New Track
      </Button>
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
