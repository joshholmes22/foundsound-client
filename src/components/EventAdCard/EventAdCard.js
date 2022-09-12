import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";

import theme from "../../utils/themes";

// use the info from event data
// get all the events by a specific id

const EventAdCard = ({ details }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="event image"
          height="140"
          // image={details.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {/* {details.name} */} Event card name
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {/* {details.description} */} Event card description
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
