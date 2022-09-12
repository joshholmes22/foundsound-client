import { useState } from "react";
import { Box } from "@mui/system";
import { ImageUploader } from "../../components/ImageUploader";
import { useAuth } from "../../context/AppProvider";

const ArtistImageUploader = () => {
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState();
  const [fileName, setFileName] = useState();
  return (
    <Box sx={{ mt: "20%" }}>
      <ImageUploader
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        setFileName={setFileName}
        dirName={`users/${user.email}/artist`}
        imageUse="artistImage"
      />
    </Box>
  );
};

export default ArtistImageUploader;
