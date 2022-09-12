import { useState } from "react";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box, Typography } from "@mui/material";

import DemoSongUploader from "../../components/DemoSongUploader";

const ArtistDemoSongs = () => {
  const [uploadedTracks, setUploadedTracks] = useState([]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box
          sx={{
            marginTop: "50px",
            width: "85vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "25%" }}>
            <DemoSongUploader
              uploadedTracks={uploadedTracks}
              setUploadedTracks={setUploadedTracks}
            />
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
      </Box>
    </Box>
  );
};

export default ArtistDemoSongs;
