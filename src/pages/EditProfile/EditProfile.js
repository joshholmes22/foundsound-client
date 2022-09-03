import { useAuth } from "../../context/AppProvider";
import "./EditProfile.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ProfileModal from "../../components/ProfileModal";

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
          <ProfileModal />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
