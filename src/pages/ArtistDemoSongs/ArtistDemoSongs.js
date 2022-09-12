import { useEffect, useState } from "react";
import ArtistNavBar from "../../components/ArtistNavBar/ArtistNavBar";
import { Box, Typography } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { GET_ARTIST_BY_ID } from "../../graphql/queries";

import DemoSongUploader from "../../components/DemoSongUploader";
import ArtistTracks from "../../containers/ArtistTracks/ArtistTracks";

const ArtistDemoSongs = () => {
  const [getArtistById, { data, loading, error }] =
    useLazyQuery(GET_ARTIST_BY_ID);
  const [uploadedTracks, setUploadedTracks] = useState([]);

  useEffect(() => {
    getArtistById({ variables: { artistId: "631f728efd7004e6bab3bccd" } });
  }, []);

  useEffect(() => {
    setUploadedTracks(data?.getArtist.demoSong);
  }, [data]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <ArtistNavBar />
        <Box
          sx={{
            marginTop: "50px",
            width: "85vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "25%" }}>
            <DemoSongUploader
              uploadedTracks={uploadedTracks}
              setUploadedTracks={setUploadedTracks}
            />
          </Box>

          {uploadedTracks.length === 0 ? (
            <Typography sx={{ m: 2, textAlign: "center" }}>
              No Uploaded Tracks
            </Typography>
          ) : (
            <Box sx={{ width: "100%" }}>
              <ArtistTracks demoSongs={uploadedTracks} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistDemoSongs;
