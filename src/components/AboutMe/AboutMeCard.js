import * as React from "react";
import { Box, Container, margin } from "@mui/system";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
const AboutMeCard = ({ info }) => {
  return (
    <Card sx={{ width: "30vw", margin: "2rem" }}>
      <CardMedia component="img" height="140"></CardMedia>
      <Stack direction="row" display="flex" justifyContent="center" spacing={2}>
        <Avatar
          alt="Josh Holmes"
          src="https://avatars.githubusercontent.com/u/69100584?v=4"
          sx={{ width: 150, height: 150 }}
        />
      </Stack>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Josh
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip label="Chip Filled" sx={{}} />
          <Chip label="Chip Filled" sx={{}} />
        </Stack>
        <Box my={5}>
          <Typography variant="body2" color="text.secondary">
            knknnm ,,m.,m.,m.,m.,m.,m.,m.,m.m.m
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small">Linkedin</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
};

export default AboutMe;
