import "./AudienceDashboard.css";

import AudienceNavBar from "../../components/AudienceNavBar";
import AllEvents from "../AllEvents";

const AudienceDashboard = () => {
  return (
    <div>
      <AudienceNavBar />
      <AllEvents />
    </div>
  );
};

export default AudienceDashboard;
