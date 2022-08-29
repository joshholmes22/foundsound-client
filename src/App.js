import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Dashboard from "./pages/Dashboard";
import { AppProvider } from "./context/AppProvider";
import "./App.css";

const link = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL || "http://localhost:4000",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/events" element={<Events />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

/* ROUTES STARTING CODE */
