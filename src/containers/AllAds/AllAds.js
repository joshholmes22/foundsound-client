import Box from "@mui/material/Box";
import AdCard from "../../components/AdCard/AdCard";

const AllAds = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <h1>HELLO ALL ADS HERE!!!!</h1>
      <AdCard />
    </Box>
  );
};

export default AllAds;
