import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Box from "@mui/material/Box";
import { GET_ALL_EVENTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { Typography } from "@mui/material";

const AllEvents = () => {
  const [getAllEvents, { data, loading, error }] = useLazyQuery(GET_ALL_EVENTS);
  const [eventData, setEventData] = useState();

  const getEvents = async () => {
    await getAllEvents();

    setEventData(data.getAllEvents);
  };

  useEffect(() => {
    console.log(loading);
    getEvents();
  }, [data]);

  useEffect(() => {
    console.log(eventData);
  }, [eventData]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {eventData &&
        eventData.map((item) => <EventCard details={item} key={item.id} />)}
    </Box>
  );
};

export default AllEvents;
