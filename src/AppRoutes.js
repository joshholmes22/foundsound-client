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
        </>
      )}

      {isLoggedIn && user.userType === "artist" && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
