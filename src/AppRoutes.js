import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import { useAuth } from "./context/AppProvider";

const AppRoutes = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artists" element={<Artists />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<EditProfile />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
