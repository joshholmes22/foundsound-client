import PrivateNavBar from "../../components/PrivateNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../components/ArtistTitle";
import ArtistBanner from "../../components/ArtistBanner";

const Profile = () => {
  return (
    <div>
      <PrivateNavBar />
      <ArtistTitle title="Josh Holmes" />
      <ArtistBanner bannerImg={bannerImg} />

      <iframe
        title="Song"
        src="https://open.spotify.com/embed/track/10RUyNnakybrdAhIm65Lkx?utm_source=generator&theme=0"
        width="30%"
        height="380"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Profile;
