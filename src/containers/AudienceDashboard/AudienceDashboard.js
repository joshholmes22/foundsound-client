import PrivateNavBar from "../../components/PrivateNavBar";
import AllEvents from "../AllEvents";

const AudienceDashboard = () => {
  return (
    <div>
      <PrivateNavBar />
      <h1 sx={{ textAlign: "center" }}>View all Events </h1>
      <AllEvents />
    </div>
  );
};

export default AudienceDashboard;
