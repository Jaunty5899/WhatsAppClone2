import { useState } from "react";
import "./ChatBox.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBox from "./SearchBox";
import IcoButton from "./IcoButton";

export default function ChatBox() {
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch(openSearch ? false : true);
  };

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
      {/* HEADER */}
      <AppBar
        className="shadowDown"
        position="absolute"
        color="red"
        sx={{ top: "-54.5%" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="large"
            variant="text"
            color="default"
            sx={{
              m: -2.5,
              textTransform: "capitalize",
              paddingLeft: 2,
              paddingRight: 2,
            }}
            startIcon={<Avatar />}
          >
            Username
          </Button>
          <Box sx={{ display: "flex" }}>
            <Stack
              direction="row"
              spacing={0.001}
              border={"1px solid rgba(0, 0, 0, 0.06)"}
            >
              <IcoButton>
                <CallOutlinedIcon />
              </IcoButton>
              <IcoButton>
                <VideocamOutlinedIcon />
              </IcoButton>
            </Stack>
            <IcoButton toggleSearch={toggleSearch}>
              <SearchOutlinedIcon />
            </IcoButton>
          </Box>
        </Toolbar>
        <SearchBox openSearch={openSearch} />
      </AppBar>
      {/* MID SECTION */}
      <Box>hello world!</Box>
      {/* FOOTER */}
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
