import { useQuery } from "@apollo/client";

import { Typography } from "@mui/material";

const ViewAnAd = () => {
  const { data, loading, error } = useQuery(GET_ALL_ADS_FOR_OWNER);

  return <Typography> View an ad</Typography>;
};

export default ViewAnAd;
