import { useEffect, useState } from "react";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ARTIST_BY_ID } from "../../graphql/queries";

import { useAuth } from "../../context/AppProvider";

import ArtistNameUpload from "../../components/ArtistNameUpload/ArtistNameUpload";

const ArtistInfo = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(GET_ARTIST_BY_ID, {
    variables: { artistId: user.id },
  });
  const [artistName, setArtistName] = useState();

  useEffect(() => {
    if (data?.getArtist) {
      setArtistName(data.getArtist.name);
    }
  }, [data]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        {loading && (
          <Box>
            <Typography>Loading</Typography>
          </Box>
        )}
        {error && (
          <Box>
            <Typography>Error</Typography>
          </Box>
        )}
        {data && (
          <Box
            sx={{
              marginTop: "90px",
              width: "85vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>{artistName}</Typography>
            <ArtistNameUpload
              setArtistName={setArtistName}
              artistName={artistName}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArtistInfo;
