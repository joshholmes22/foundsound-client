import Typography from "@mui/material/Typography";

import "./EventOrganiserDashboard.css";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";
import Banner from "../../components/Banner";
import { Box } from "@mui/material";

const EventOrganiserDashboard = () => {
  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <EventOrganiserNavBar />
          <Box sx={{ marginTop: "50px" }}>
            <Banner />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EventOrganiserDashboard;
