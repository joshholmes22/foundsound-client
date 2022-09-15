import Typography from "@mui/material/Typography";

import "./EventOrganiserDashboard.css";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";
import Banner from "../../components/Banner";
// import PrivateNavBar from "../../components/PrivateNavBar";

const EventOrganiserDashboard = () => {
  return (
    <div>
      {/* <PrivateNavBar /> */}
      <EventOrganiserNavBar />

      <Banner />
    </div>
  );
};

export default EventOrganiserDashboard;
