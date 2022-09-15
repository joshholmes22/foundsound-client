import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { GET_ALL_ARTISTS } from "../../graphql/queries";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const AllArtists = () => {
  const { data, loading, error } = useQuery(GET_ALL_ARTISTS);
  const [artistsData, setArtistsData] = useState([]);

  console.log(data);

  const artist = {
    name: "Josh Holmes",
    description: "Josh is a singer from the UK",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: "[ID]",
    price: 19.99,
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {/* {data && <ArtistCard details={artistsData[0]} key={"item.id"} />} */}
    </Box>
  );
};

export default AllArtists;

{
  /* artistsData.map((item) => (
          <ArtistCard details={artist} key={item.id} />
        )) */
}
