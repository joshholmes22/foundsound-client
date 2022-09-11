import PrivateNavBar from "../../components/PrivateNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../containers/ArtistTitle";
import ArtistBanner from "../../containers/ArtistBanner";
import ArtistTracks from "../../containers/ArtistTracks";
import ArtistEvents from "../../containers/ArtistEvents";

const ArtistProfile = () => {
  return (
    <div>
      <PrivateNavBar />
      <ArtistTitle title="Josh Holmes" />
      <ArtistBanner bannerImg={bannerImg} />
      <ArtistTracks />
      <ArtistEvents />
    </div>
  );
};

export default ArtistProfile;
