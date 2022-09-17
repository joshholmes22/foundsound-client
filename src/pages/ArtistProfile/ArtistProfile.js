import { Box } from "@mui/material";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";

import bannerImg from "../../assets/images/profileTemplate/banner-img.jpg";
import ArtistTitle from "../../containers/ArtistTitle";
import ArtistBanner from "../../containers/ArtistBanner";
import ArtistTracks from "../../containers/ArtistTracks";
import ArtistEvents from "../../containers/ArtistEvents";

import { useQuery } from "@apollo/client";
import { GET_ARTIST_BY_ID } from "../../graphql/queries";

import { useAuth } from "../../context/AppProvider";
import { useEffect, useState } from "react";

const ArtistProfile = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(GET_ARTIST_BY_ID, {
    variables: { artistId: user.id },
  });
  const [formatData, setFormatData] = useState();

  useEffect(() => {
    if (data) {
      setFormatData(data.getArtist);
    }
  }, [data]);
  return (
    <Box sx={{ display: { md: "flex" } }}>
      <ArtistNavBar />

      {formatData && (
        <Box
          sx={{
            marginTop: { md: "60px" },
            maxWidth: { md: "87vw", sm: "100vw" },
          }}
        >
          <ArtistTitle title={formatData.name} />
          <ArtistBanner artistImages={formatData.artistImage} />
          <ArtistTracks demoSongs={formatData.demoSong} />
          <ArtistEvents />
        </Box>
      )}
    </Box>
  );
};

export default ArtistProfile;
