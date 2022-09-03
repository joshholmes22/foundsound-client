import { useAuth } from "../../context/AppProvider";
import "./EditProfile.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

const EditProfile = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          textAlign: "center",
          width: "100%",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={user.imageUrl}
            alt="user profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Social Media: {user.socialMedia}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Venues:
            </Typography>
            <Button variant="contained">Add Venue</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default EditProfile;
