import { useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Box from "@mui/material/Box";
import { GET_ALL_EVENTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";

const AllEvents = () => {
  const [getAllEvents, { data, loading, error }] = useLazyQuery(GET_ALL_EVENTS);

  const getEvents = async () => {
    await getAllEvents();
  };

  useEffect(() => {
    getEvents();

    console.log(data);
  }, [data]);

  const event1 = {
    name: "Test Event",
    description: "This is a great event to test if the card looks ok",
    startDateTime: "25th September 19.30",
    endDateTime: "25th September 23.00",
    venue: "Glastonbury",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: "[ID]",
    price: 19.99,
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <EventCard details={event1} />
      <EventCard details={event1} />
      <EventCard details={event1} />
    </Box>
  );
};

export default AllEvents;
