import EventCard from "../../components/EventCard/EventCard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const AllEvents = () => {
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
    <Box sx={{ backgroundColor: "#edede9" }}>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "15px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Upcoming Events
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <EventCard details={event1} />
        <EventCard details={event1} />
        <EventCard details={event1} />
      </Box>
    </Box>
  );
};

export default AllEvents;
