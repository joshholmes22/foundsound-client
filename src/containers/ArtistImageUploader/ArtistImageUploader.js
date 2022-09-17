import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { ImageUploader } from "../../components/ImageUploader";
import { useAuth } from "../../context/AppProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Typography } from "@mui/material";
import { CREATE_ARTIST_PROFILE } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ArtistImageUploader = ({ imageData }) => {
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState();
  const [fileName, setFileName] = useState();

  const [createArtistProfile, { data, loading, error }] = useMutation(
    CREATE_ARTIST_PROFILE
  );

  useEffect(() => {
    if (imageUrl) {
      const createArtistProfileInput = {
        artistImage: [...imageData, imageUrl],
      };
      createArtistProfile({ variables: { createArtistProfileInput } });
    }
  }, [imageUrl]);

  return (
    <>
      <Box sx={{ mt: "5vh" }}>
        <ImageUploader
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setFileName={setFileName}
          dirName={`users/${user.email}/artist`}
          imageUse="artistImage"
        />
      </Box>
      {imageData.length !== 0 ? (
        <ImageList
          sx={{
            width: 800,
            height: 450,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: "translateZ(0)",
          }}
          rowHeight={400}
          gap={5}
        >
          {imageData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item} cols={cols} rows={rows}>
                <img {...srcset(item, 250, 200)} alt={item} loading="lazy" />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      ) : (
        <Box>
          <Typography>No images</Typography>
        </Box>
      )}
    </>
  );
};

export default ArtistImageUploader;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
