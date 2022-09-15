import * as React from "react";
import { Box, Container, margin } from "@mui/system";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
const AboutMe = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "70vh",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography
          variant="h1"
          noWrap
          component="div"
          sx={{ fontWeight: "500", fontSize: "100px", color: "#ffffff" }}
        >
          About Us
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent="space-around" my={3} mx={5}>
        <Card sx={{ width: "30vw" }}>
          <CardMedia component="img" height="140"></CardMedia>
          <CardContent>
            <Container>
              <Chip
                label="Chip Filled"
                backgroundColor="#f28482"
                sx={{ margin: "0.3rem" }}
              />
              <Chip label="Chip Filled" sx={{ margin: "0.3rem" }} />
            </Container>

            <Typography gutterBottom variant="h5" component="div">
              Amirtha
            </Typography>
            <Typography variant="body2" color="text.secondary">
              knknnm ,,m.,m.,m.,m.,m.,m.,m.,m.m.m
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Linkedin</Button>
            <Button size="small">Github</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "30vw" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Container>
              <Chip
                label="Chip Filled"
                backgroundColor="#f28482"
                sx={{ margin: "0.3rem" }}
              />
              <Chip label="Chip Filled" sx={{ margin: "0.3rem" }} />
            </Container>

            <Typography gutterBottom variant="h5" component="div">
              Amirtha
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Linkedin</Button>
            <Button size="small">Github</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutMe;
