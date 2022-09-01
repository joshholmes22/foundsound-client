import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Typography>HOME</Typography>
      <Link href="/signup">Click here to sign up</Link>
    </div>
  );
};

export default Home;
