import Box from "@mui/material/Box";
import AdCard from "../../components/AdCard/AdCard";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/themes";
import { GET_ALL_ADS_FOR_OWNER } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";

const AllAds = () => {
  const { data, loading, error } = useQuery(GET_ALL_ADS_FOR_OWNER);

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
          View All Your Adverts
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loading && <CircularProgress />}
          {error && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert sx={{ marginTop: "10px" }} severity="warning">
                Loading Error
              </Alert>
            </Stack>
          )}
        </Box>

        {data && data?.getAllAdsForEventOwner?.length !== 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.getAllAdsForEventOwner.map((item) => (
              <AdCard details={item} key={item.id} />
            ))}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AllAds;
