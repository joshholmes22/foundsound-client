import "./EventOrganiserDashboard.css";
import PrivateNavBar from "../../components/PrivateNavBar";

const EventOrganiserDashboard = () => {
  return (
    <div>
      <PrivateNavBar pages={["Home", "Events", "Ads"]} />
      <h1>Event Organiser Dashboard</h1>
    </div>
  );
};

export default EventOrganiserDashboard;
