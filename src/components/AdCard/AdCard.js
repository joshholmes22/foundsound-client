import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";

const AdCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#F7F7F7",
        boxShadow: "#A4A3A2",
        borderRadius: "15px",
        width: 345,
        margin: 5,
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="My Wedding"
        // EVENT TITLE WILL HAVE TO GO HERE
      />
      <CardMedia component="img" height="194" image="test" alt="test" />
      {/* //IMAGE TO COME FROM THE EVENT */}
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          The description will go here
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Payment:
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
        <Button variant="contained">View Responses</Button>
      </CardActions>
    </Card>
  );
};

export default AdCard;
