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
import PrivateNavBar from "../../components/PrivateNavBar";

const PublicArtistProfile = () => {
  const artistURL = new URL(window.location.href).pathname.split("/")[2];
  const { user } = useAuth();
  const { data, loading, error } = useQuery(GET_ARTIST_BY_ID, {
    variables: { artistId: artistURL },
  });
  const [formatData, setFormatData] = useState();

  useEffect(() => {
    if (data) {
      setFormatData(data.getArtist);
    }
  }, [data]);
  return (
    <Box>
      <PrivateNavBar />

      {formatData && (
        <Box>
          <ArtistTitle title={formatData.name} />
          <ArtistBanner artistImages={formatData.artistImage} />
          <ArtistTracks demoSongs={formatData.demoSong} />
          <ArtistEvents />
        </Box>
      )}
    </Box>
  );
};

export default PublicArtistProfile;
