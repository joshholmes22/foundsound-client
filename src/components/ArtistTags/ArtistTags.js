import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ArtistTags = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "center", marginTop: "15px" }}
    >
      <Chip label="Pop" color="success" />
      <Chip label="Solo Artist" color="success" />
      <Chip label="Singer/Songwriter" color="success" />
      <Chip label="Acoustic" color="success" />
    </Stack>
  );
};

export default ArtistTags;
