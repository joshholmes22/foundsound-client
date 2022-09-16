import AudienceMemberNavBar from "../../components/AudienceMemberNavBar";
import AllArtists from "../AllArtists";
import "./ViewAllArtists.css";

const ViewAllArtists = () => {
  return (
    <div className="artistCardContainer">
      <AudienceMemberNavBar />
      <AllArtists />
    </div>
  );
};

export default ViewAllArtists;
