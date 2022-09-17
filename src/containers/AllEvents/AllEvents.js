import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { GET_ALL_EVENTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

import theme from "../../utils/themes";

const AllEvents = () => {
  const [getAllEvents, { data, loading, error }] = useLazyQuery(GET_ALL_EVENTS);

  const [eventData, setEventData] = useState();

  const getEvents = async () => {
    await getAllEvents();
    if (!loading && !error) {
      setEventData(data.getAllEvents);
    }
  };

  useEffect(() => {
    getEvents();
  }, [data]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ m: "30px" }}
            font="bold"
          >
            View All Your Events
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {loading && <CircularProgress />}
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert sx={{ marginTop: "10px" }} severity="warning">
                  Loading Error
                </Alert>
              </Stack>
            )}
          </Box>

          {data && data?.getAllEvents.length !== 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {eventData &&
                eventData.map((item) => (
                  <EventCard details={item} key={item.id} />
                ))}
            </Box>
          )}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default AllEvents;
