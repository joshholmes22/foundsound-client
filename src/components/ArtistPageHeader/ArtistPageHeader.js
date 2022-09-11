import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const ArtistPageHeader = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#0A0A0A",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: "500", fontSize: "25px" }}
        >
          FOUND SOUND ARTIST
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ArtistPageHeader;
