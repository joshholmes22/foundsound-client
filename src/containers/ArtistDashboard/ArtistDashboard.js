import AllEvents from "../AllEvents";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";

const ArtistDashboard = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <AllEvents />
        </Box>
      </Box>
    </div>
  );
};

export default ArtistDashboard;
