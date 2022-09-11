import "./AudienceDashboard.css";

import PrivateNavBar from "../../components/PrivateNavBar";
import AllEvents from "../AllEvents";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";

const AudienceDashboard = () => {
  return (
    <div>
      <ArtistNavBar />
      <Box sx={{ marginLeft: "240px" }}>
        <AllEvents />
      </Box>
    </div>
  );
};

export default AudienceDashboard;
