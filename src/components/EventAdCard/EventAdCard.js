import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../utils/themes";

// use the info from event data
// get all the events by a specific id

const EventAdCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            event name goes here
          </Typography>
          <Typography variant="body2" color="text.secondary">
            event description goes here
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" align="center">
            View
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default EventAdCard;
