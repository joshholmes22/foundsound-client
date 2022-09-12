import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";
import DemoSongUploader from "../../components/DemoSongUploader";

const ArtistDemoSongs = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <DemoSongUploader />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistDemoSongs;
