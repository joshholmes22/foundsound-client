import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fromUnixTime } from "date-fns";
import { useAuth } from "../../context/AppProvider";
import AcceptAdButton from "../AcceptAdButton/AcceptAdButton";

const AdCard = ({ details }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/ads/${details.event.id}`);
  };

  const expiresDate = fromUnixTime(details.expires / 1000)
    .toString()
    .split("2022")[0];

  console.log(details);
  return (
    <Card
      sx={{
        backgroundColor: "#F7F7F7",
        boxShadow: "#A4A3A2",
        borderRadius: "15px",
        width: 345,
        margin: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "900",
        fontSize: "1.5vw",
        alignText: "center",
      }}
    >
      <CardHeader
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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "1.5vw",
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
        {user.userType === "artist" ? (
          <AcceptAdButton
            userID={user.id}
            adID={details._id}
            responses={details.allResponses}
            eventId={details.event.id}
          />
        ) : (
          <Button variant="contained" onClick={onClick}>
            View Responses
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default AdCard;
