import AboutMeContainer from "../../components/AboutMe";
const AboutMe = () => {
  const info = {[{name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}, {name: "Josh Holmes", imageURL: "https://avatars.githubusercontent.com/u/69100584?v=4", description: ""}]};
  return (
    <Box backgroundColor="#000000">
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
      <Box display={"flex"} justifyContent="space-around" flexWrap={"wrap"}>
        <AboutMeCard info={info} />
      </Box>
    </Box>
  );
};

export default AboutMe;
