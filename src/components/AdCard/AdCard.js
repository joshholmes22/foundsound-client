import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fromUnixTime } from "date-fns";

const AdCard = ({ details }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/ads/${details.event.id}`);
  };

  const expiresDate = fromUnixTime(details.expires / 1000)
    .toString()
    .split("2022")[0];

  console.log(details.event.id);
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#303030",
          boxShadow: "#A4A3A2",
          borderRadius: "10px",
          width: 300,
          margin: 5,
          alignItems: "center",
          fontWeight: "900",
          fontSize: "1.5vw",
          alignText: "center",
          "@media(minWidth: 375px)": {
            margin: 2,
          },
        }}
      >
        <CardHeader
          sx={{ color: "white", textAlign: "center" }}
          title={details.event.name}
          // EVENT TITLE WILL HAVE TO GO HERE
        />
        <CardMedia
          component="img"
          height="194"
          image={details.event.imageUrl}
          alt={details.name}
        />
        {/* //IMAGE TO COME FROM THE EVENT */}
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "400",
              textAlign: "center",
              marginBottom: "1vh",
            }}
          >
            {details.description}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {details.fee ? `Payment: ${details.fee}` : "Free"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Respond Deadline: {`${expiresDate}`}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* add a onClick fn to navigate to the ads/id page showing that id only  */}
          <Button variant="contained" onClick={onClick}>
            View Responses
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AdCard;
