import { Typography } from "@mui/material";

import AudienceMemberNavBar from "../../components/AudienceMemberNavBar";
import AllEvents from "../../containers/AllEvents";

const ViewEvents = () => {
  return (
    <>
      <AudienceMemberNavBar />
      <Typography> View Events</Typography>
      <AllEvents />
    </>
  );
};

export default ViewEvents;
