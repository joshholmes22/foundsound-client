import PrivateNavBar from "../../components/PrivateNavBar";
import AllArtists from "../AllArtists";
import "./ViewAllArtists.css";

const ViewAllArtists = () => {
  return (
    <div className="artistCardContainer">
      <PrivateNavBar />
      <AllArtists />
    </div>
  );
};

export default ViewAllArtists;
