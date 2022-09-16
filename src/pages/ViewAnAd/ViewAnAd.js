import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
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
        <EventOrganiserNavBar />
        <Typography> View an ad</Typography>;
      </ThemeProvider>
    </>
  );
};

export default ViewAnAd;
