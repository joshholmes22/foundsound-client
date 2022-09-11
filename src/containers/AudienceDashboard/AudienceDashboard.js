import "./AudienceDashboard.css";

import PrivateNavBar from "../../components/PrivateNavBar";
import AllEvents from "../AllEvents";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";
import ArtistPageHeader from "../../components/ArtistPageHeader";

const AudienceDashboard = () => {
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

export default AudienceDashboard;
