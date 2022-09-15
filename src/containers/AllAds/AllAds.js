import Box from "@mui/material/Box";
import AdCard from "../../components/AdCard/AdCard";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/themes";
import { useState } from "react";
import { GET_ALL_ADS_FOR_OWNER } from "../../graphql/queries";
import { useLazyQuery, useQuery } from "@apollo/client";

const AllAds = () => {
  const { data, loading, error } = useQuery(GET_ALL_ADS_FOR_OWNER);
  console.log(data);
  const [getAllAdverts, advertData, setAdvertData] = useState();

  const getAdverts = async () => {
    await getAllAdverts();
    if (!loading && !error) {
      setAdvertData(data.getAllAdverts);
    }
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
            {advertData &&
              advertData.map((item) => <AdCard details={item} key={item.id} />)}
          </Box>
        </Box>
      </ThemeProvider>
    );
  };
};

export default AllAds;
