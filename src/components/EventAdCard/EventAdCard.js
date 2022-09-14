import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import theme from "../../utils/themes";

const EventAdCard = ({ details, setCurrentEventId }) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    setCurrentEventId(event.target.getAttribute("data-id"));
    console.log(event.target.getAttribute("data-id"));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card sx={{ height: "140hv", width: "250px", margin: 1 }}>
        <CardMedia
          component="img"
          alt="event image"
          height="140hv"
          image={details.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {details.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {details.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Button size="small" data-id={details.id} onClick={handleOnClick}>
              SELECT
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventAdCard;
