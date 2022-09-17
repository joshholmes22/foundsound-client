import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import EventOrganiserNavBar from "../../components/EventOrganiserNavBar/EventOrganiserNavBar";
import theme from "../../utils/themes";

const Response = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <EventOrganiserNavBar />
          <Box sx={{ display: "flex" }}>{/* render response cards here */}</Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Response;
