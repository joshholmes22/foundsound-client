import { Box } from "@mui/material";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";
import AllEvents from "../../containers/AllEvents";

const Events = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <EventOrganiserNavBar />
        <Box sx={{ marginTop: "50px" }}>
          <AllEvents />
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
