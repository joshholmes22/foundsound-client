import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ details }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        backgroundColor: "#0A0A0A",
        width: 345,
        margin: 5,
        "@media(minWidth: 375px)": {
          margin: 2,
        },
      }}
    >
      <CardHeader
        //DO WE NEED THIS AVATAR IF THERE IS A PICTURE OF THE ARTIST BELOW?
        // avatar={
        //   <Avatar sx={{ bgcolor: "#4A69FF" }} aria-label="recipe">
        //     A
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
          <Typography
            variant="h5"
            color="white"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {details.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={details.artistImage[0]}
        alt={details.name}
      />

      <div>
        <iframe
          title="Song"
          src={`https://open.spotify.com/embed/track/${details.demoSong[0]}?utm_source=generator&theme=0`}
          width="100%"
          height="100"
          frameBorder="0"
        ></iframe>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/artistProfile/${details.user.id}`);
          }}
          sx={{}}
        >
          View profile
        </Button>
      </Box>
      <CardActions
        disableSpacing
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default ArtistCard;
