import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Artists from "./pages/Artists";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AppProvider";
import ArtistProfile from "./pages/ArtistProfile";
import CreateAd from "./pages/CreateAd/createAd";
import Ads from "./pages/Ads/Ads";
import Events from "./pages/Events/Events";
import ArtistDemoSongs from "./pages/ArtistDemoSongs";
import ArtistPhotos from "./pages/ArtistPhotos";
import ArtistInfo from "./pages/ArtistInfo/ArtistInfo";
import ViewAds from "./containers/ViewAds/ViewAds";
import ViewAnAd from "./pages/ViewAnAd";
import ViewEvents from "./pages/ViewEvents/ViewEvents";
import PublicArtistProfile from "./pages/PublicArtistProfile/ArtistProfile";

const AppRoutes = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}

      {isLoggedIn && user.userType === "audienceMember" && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/viewEvents" element={<ViewEvents />} />
          <Route path="/artistProfile/:id" element={<PublicArtistProfile />} />
        </>
      )}

      {isLoggedIn && user.userType === "eventOrganiser" && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/createAd" element={<CreateAd />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ads" element={<Ads />} />
        </>
      )}

      {isLoggedIn && user.userType === "artist" && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
          <Route path="/uploadPhotos" element={<ArtistPhotos />} />
          <Route path="/uploadTracks" element={<ArtistDemoSongs />} />
          <Route path="/editInfo" element={<ArtistInfo />} />
          <Route path="/viewAds" element={<ViewAds />} />
          <Route path="/ads/:id" element={<ViewAds />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
