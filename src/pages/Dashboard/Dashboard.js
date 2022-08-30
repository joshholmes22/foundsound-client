import "./Dashboard.css";
import { useAuth } from "../../context/AppProvider";
import AudienceDashboard from "../../containers/AudienceDashboard";
import ArtistDashboard from "../../containers/ArtistDashboard";
import EventOrganiserDashboard from "../../containers/EventOrganiserDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  const userType = user.userType;

  return (
    <div>
      {userType === "audienceMember" && <AudienceDashboard />}
      {userType === "artist" && <ArtistDashboard />}
      {userType === "eventOrganiser" && <EventOrganiserDashboard />}
    </div>
  );
};

export default Dashboard;
