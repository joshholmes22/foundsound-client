import "./AudienceDashboard.css";

import PrivateNavBar from "../../components/PrivateNavBar";
import AllEvents from "../AllEvents";

const AudienceDashboard = () => {
  return (
    <div>
      <PrivateNavBar />
      <AllEvents />
    </div>
  );
};

export default AudienceDashboard;
