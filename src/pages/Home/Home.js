import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import HomeNavBar from "../../components/HomeNavBar";
import HeroBanner from "../../components/HeroBanner";

import "./Home.css";

const Home = () => {
  return (
    <div className="homePageContainer">
      <HomeNavBar />
      <HeroBanner />
      <Typography>HOME</Typography>
      <Link href="/signup">Click here to sign up</Link>
    </div>
  );
};

export default Home;
