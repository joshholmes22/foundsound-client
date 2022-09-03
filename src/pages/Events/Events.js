import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "./Events.css";

const Events = () => {
  return (
    <div>
      <h1 className="page-title">Create an Event</h1>
      <React.Fragment>
        <CssBaseline />
        <Container className="event-container" maxWidth="sm">
          <Box sx={{ bgcolor: "#f8f9fa", height: "100vh" }} />
          <div></div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Events;
