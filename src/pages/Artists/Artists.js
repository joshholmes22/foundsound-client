import "./Artists.css";
import { useAuth } from "../../context/AppProvider";
import ViewAllArtists from "../../containers/ViewAllArtists";

const Artists = () => {
  const { user } = useAuth();
  const userType = user.userType;

  return (
    <div>
      {userType === "eventOrganiser" && <ViewAllArtists />}
      {userType === "audienceMember" && <ViewAllArtists />}
    </div>
  );
};

export default Artists;
