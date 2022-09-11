import { Box } from "@mui/material";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../containers/ArtistTitle";
import ArtistBanner from "../../containers/ArtistBanner";
import ArtistTracks from "../../containers/ArtistTracks";
import ArtistEvents from "../../containers/ArtistEvents";

const ArtistProfile = () => {
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
        <ArtistTracks />
        <ArtistEvents />
      </Box>
    </Box>
  );
};

export default ArtistProfile;
