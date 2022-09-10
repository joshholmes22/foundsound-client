import "./AudienceDashboard.css";

import PrivateNavBar from "../../components/PrivateNavBar";
import AllEvents from "../AllEvents";

const AudienceDashboard = () => {
  return (
    <div>
      <PrivateNavBar pages={["Home", "My Events", "Artists"]} />
      <AllEvents />
    </div>
  );
};

export default AudienceDashboard;
