import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ArtistTitle = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(0, 0, 0, 0.8)",
        zIndex: "2",
        padding: "15px",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ArtistTitle;
