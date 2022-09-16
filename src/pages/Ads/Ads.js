import { Box } from "@mui/material";

import EventOrganiserNavBar from "../../components/EventOrganiserNavBar/EventOrganiserNavBar";
import AllAds from "../../containers/AllAds";

const Ads = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex" }}>
          <EventOrganiserNavBar />
          <Box sx={{ marginTop: "50px" }}>
            <AllAds />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Ads;
