import AllAds from "../AllAds";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";

const ArtistDashboard = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <AllAds />
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistDashboard;
