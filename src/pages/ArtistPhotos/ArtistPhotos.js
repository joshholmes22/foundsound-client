import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box } from "@mui/material";
import ArtistImageUploader from "../../containers/ArtistImageUploader";
import { useQuery } from "@apollo/client";
import { GET_ARTIST_BY_ID } from "../../graphql/queries";

import { useAuth } from "../../context/AppProvider";
import { useEffect } from "react";

const ArtistPhotos = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(GET_ARTIST_BY_ID, {
    variables: { artistId: user.id },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        {data && (
          <Box sx={{ marginTop: "50px" }}>
            <ArtistImageUploader imageData={data?.getArtist?.artistImage} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArtistPhotos;
