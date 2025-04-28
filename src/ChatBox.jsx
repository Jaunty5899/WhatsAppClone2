import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./ChatBox.css";

export default function ChatBox() {
  return (
    <Box
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <AppBar
        className="shadowDown"
        position="absolute"
        color="white"
        sx={{ top: "-54.5%" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box>hello world!</Box>
      <AppBar
        className="shadowUp"
        position="absolute"
        color="white"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
