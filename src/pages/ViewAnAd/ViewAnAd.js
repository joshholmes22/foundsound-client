import { useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { GET_AN_EVENT } from "../../graphql/queries";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";

import theme from "../../utils/themes";

const ViewAnAd = () => {
  const { data, loading, error } = useQuery(GET_AN_EVENT);

  console.log(data);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <EventOrganiserNavBar />
          <Box sx={{ display: "flex", marginTop: "50px" }}>
            {/* render ad card here  */}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ViewAnAd;
