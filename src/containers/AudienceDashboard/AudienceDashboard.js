import { ThemeProvider } from "@mui/material/styles";

import AudienceMemberNavBar from "../../components/AudienceMemberNavBar";
import Typography from "@mui/material/Typography";

import AllEvents from "../AllEvents";
import theme from "../../utils/themes";

const AudienceDashboard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AudienceMemberNavBar />
        <Typography sx={{ textAlign: "center" }}>View all Events </Typography>
        <AllEvents />
      </ThemeProvider>
    </>
  );
};

export default AudienceDashboard;
