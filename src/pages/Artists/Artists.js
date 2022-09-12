import "./Artists.css";
import { useAuth } from "../../context/AppProvider";
import AllArtists from "../../containers/AllArtists";

const Artists = () => {
  const { user } = useAuth();
  const userType = user.userType;

  return <div>{userType === "eventOrganiser" && <AllArtists />}</div>;
};

export default Artists;
