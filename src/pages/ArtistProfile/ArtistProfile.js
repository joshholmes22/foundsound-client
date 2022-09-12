import { Box } from "@mui/material";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../containers/ArtistTitle";
import ArtistBanner from "../../containers/ArtistBanner";
import ArtistTracks from "../../containers/ArtistTracks";
import ArtistEvents from "../../containers/ArtistEvents";

const ArtistProfile = () => {
  const demoSongs = [
    "2knlNLtT7XdKadSzBjycVQ",
    "1BRQhOPY3QtY8hcvafhvjq",
    "24qK0O65X0l6TViKiKFbq2",
  ];
  return (
    <Box sx={{ display: { md: "flex" } }}>
      <ArtistNavBar />

      <Box
        sx={{
          marginTop: { md: "60px" },
          maxWidth: { md: "87vw", sm: "100vw" },
        }}
      >
        <ArtistTitle title="Josh Holmes" />
        <ArtistBanner bannerImg={bannerImg} />
        <ArtistTracks demoSongs={demoSongs} />
        <ArtistEvents />
      </Box>
    </Box>
  );
};

export default ArtistProfile;
