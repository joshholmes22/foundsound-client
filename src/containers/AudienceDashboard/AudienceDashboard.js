import { ThemeProvider } from "@mui/material/styles";

import AudienceMemberNavBar from "../../components/AudienceMemberNavBar";
import AllEvents from "../AllEvents";
import theme from "../../utils/themes";

const AudienceDashboard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AudienceMemberNavBar />
        <AllEvents />
      </ThemeProvider>
    </>
  );
};

export default AudienceDashboard;
