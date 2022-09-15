import Box from "@mui/material/Box";
import AdCard from "../../components/AdCard/AdCard";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/themes";

const AllAds = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ m: "30px" }}
          font="bold"
        >
          View Your Adverts
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AdCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AllAds;
