import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Banner = (props) => {
  const { post } = props;

  return (
    <Box>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `https://unsplash.com/photos/oqStl2L5oxI`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={`https://unsplash.com/photos/oqStl2L5oxI`}
            alt="dashboard"
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Welcome to your Dashboard
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                It All Starts With An Event
              </Typography>
              <Link variant="subtitle1" href="/events">
                Click here
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Banner;
