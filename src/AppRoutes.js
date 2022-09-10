import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Dashboard from "./pages/Dashboard";
import AllEvents from "./pages/AllEvents";
import { useAuth } from "./context/AppProvider";

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/viewEvents" element={<AllEvents />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/viewEvents" element={<AllEvents />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
