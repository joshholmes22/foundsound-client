import { ThemeProvider } from "@mui/material/styles";
import HomeNavBar from "../../components/HomeNavBar";
import HeroBanner from "../../components/HeroBanner";

import "./Home.css";
import theme from "../../utils/themes";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="homePageContainer">
        <HomeNavBar />
        <HeroBanner />
      </div>
    </ThemeProvider>
  );
};

export default Home;
