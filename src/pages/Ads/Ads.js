import EventOrganiserNavBar from "../../components/EventOrganiserNavBar/EventOrganiserNavBar";
import AllAds from "../../containers/AllAds";

const Ads = ({ data }) => {
  return (
    <>
      <EventOrganiserNavBar />
      <AllAds />
    </>
  );
};

export default Ads;
