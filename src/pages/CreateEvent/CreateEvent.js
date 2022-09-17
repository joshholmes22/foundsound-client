import { Box } from "@mui/material";
import EventForm from "../../components/EventForm";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";

const CreateEvent = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <EventOrganiserNavBar />
      <Box sx={{ marginTop: "30px" }}>
        <EventForm />
      </Box>
    </Box>
  );
};

export default CreateEvent;
