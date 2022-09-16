import AllAdsForArtists from "../AllAdsForArtists";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";

const ArtistDashboard = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <AllAdsForArtists />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistDashboard;
