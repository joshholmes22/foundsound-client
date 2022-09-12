import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";
import ArtistImageUploader from "../../containers/ArtistImageUploader";

const ArtistPhotos = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <ArtistImageUploader />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistPhotos;
