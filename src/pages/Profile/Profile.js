import PrivateNavBar from "../../components/PrivateNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../components/ArtistTitle";
import ArtistBanner from "../../components/ArtistBanner";
import ArtistTracks from "../../components/ArtistTracks";

const Profile = () => {
  return (
    <div>
      <PrivateNavBar />
      <ArtistTitle title="Josh Holmes" />
      <ArtistBanner bannerImg={bannerImg} />
      <ArtistTracks />
    </div>
  );
};

export default Profile;
