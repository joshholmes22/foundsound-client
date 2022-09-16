import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fromUnixTime } from "date-fns";
import Box from "@mui/material/Box";

const EventCard = ({ details }) => {
  const startDate = fromUnixTime(details.startDate / 1000)
    .toString()
    .split("2022")[0];

  return (
    <Card
      sx={{
        backgroundColor: "#303030",
        borderRadius: "15px",
        width: 300,
        alignItems: "center",
        fontWeight: "900",
        fontSize: "1.5vw",
        alignText: "center",
        margin: 5,
        "@media(minWidth: 375px)": {
          margin: 2,
        },
      }}
    >
      <CardHeader
        sx={{ textAlign: "center" }}
        title={
          <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
            {details.name}
          </Typography>
        }
        subheader={
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {`Date: ${startDate}`}
          </Typography>
          // subheader={`Date: ${startDate}`}
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={details.imageUrl}
        alt={details.name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="white"
          sx={{ textAlign: "center", fontSize: "20px" }}
        >
          {details.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
