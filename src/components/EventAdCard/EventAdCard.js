import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import theme from "../../utils/themes";

// use the info from event data
// get all the events by a specific id

const EventAdCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="event image"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            event name goes here
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            event description goes here
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              textAlign={"center"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button size="small">View</Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default EventAdCard;
