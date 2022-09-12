import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, FormControl, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

const DemoSongUploader = () => {
  // format = spotify:track:10RUyNnakybrdAhIm65Lkx
  const [trackError, setTrackError] = useState(false);
  const [errorText, setErrorText] = useState("UNKNOWN ERROR");
  const [uploadedTracks, setUploadedTracks] = useState([]);
  const [newTrack, setNewTrack] = useState();

  const handleSubmit = () => {
    if (newTrack) {
      const splitTrack = newTrack.trim().split(":");
      if (splitTrack[0] === "spotify" && splitTrack[1] === "track") {
        const trackData = splitTrack[2];
        if (uploadedTracks.includes(trackData)) {
          setErrorText("ERROR: This track is already added");
          setTrackError(true);
        } else {
          setUploadedTracks([...uploadedTracks, trackData]);
          setTrackError(false);
        }
      } else {
        setErrorText("ERROR: Please enter a valid URI.");
        setTrackError(true);
      }
    } else {
      setErrorText("ERROR: Please enter a valid URI.");
      setTrackError(true);
    }
  };

  console.log(uploadedTracks);

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
          onInput={(e) => setNewTrack(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleSubmit}
        >
          Upload
        </Button>
        <FormHelperText id="my-helper-text" sx={{ textAlign: "center" }}>
          Make sure tracks match your artist profile
        </FormHelperText>
        <FormHelperText id="my-helper-text" sx={{ textAlign: "center" }}>
          Example format: spotify:track:10RUyNnakybrdAhIm65Lkx
        </FormHelperText>
        {trackError && (
          <FormHelperText
            id="my-error-text"
            sx={{ color: "red", textAlign: "center" }}
          >
            {errorText}
          </FormHelperText>
        )}
      </Box>

      {uploadedTracks.length === 0 ? (
        <Typography sx={{ m: 2, textAlign: "center" }}>
          No Uploaded Tracks
        </Typography>
      ) : (
        <Typography sx={{ m: 2, textAlign: "center" }}>
          {uploadedTracks}
        </Typography>
      )}
    </Box>
  );
};

export default DemoSongUploader;
