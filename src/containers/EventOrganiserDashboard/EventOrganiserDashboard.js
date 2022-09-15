import Typography from "@mui/material/Typography";

import "./EventOrganiserDashboard.css";
import EventOrganiserNavBar from "../../components/EventOrganiserNavBar";
import Banner from "../../components/Banner";
// import PrivateNavBar from "../../components/PrivateNavBar";

const banner = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const EventOrganiserDashboard = () => {
  return (
    <div>
      {/* <PrivateNavBar /> */}
      <EventOrganiserNavBar />
      <Banner post={banner} />
    </div>
  );
};

export default EventOrganiserDashboard;
