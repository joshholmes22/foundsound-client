import Box from "@mui/material/Box";

const ImageWithBackground = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default ImageWithBackground;
