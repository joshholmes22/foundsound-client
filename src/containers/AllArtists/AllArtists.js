import EventCard from "../../components/EventCard/EventCard";
import Box from "@mui/material/Box";

const AllArtists = () => {
  const artist1 = {
    name: "Josh Holmes",
    description: "Josh is a singer from the UK",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: "[ID]",
    price: 19.99,
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <EventCard details={artist1} />
      <EventCard details={artist1} />
      <EventCard details={artist1} />
    </Box>
  );
};

export default AllArtists;
