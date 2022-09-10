import "./ArtistDashboard.css";
import PrivateNavBar from "../../components/PrivateNavBar";

const ArtistDashboard = () => {
  return (
    <div>
      <PrivateNavBar pages={["Home", "Find Events", "Upcoming Events"]} />
      <h1>Artist Dashboard</h1>
    </div>
  );
};

export default ArtistDashboard;
