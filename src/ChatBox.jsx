import { useState } from "react";
import "./ChatBox.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchBox from "./SearchBox";
import IcoButton from "./IcoButton";

export default function ChatBox() {
  const [openSearch, setOpenSearch] = useState(false);
  const [message, setMessage] = useState("");

  const toggleSearch = () => {
    setOpenSearch(openSearch ? false : true);
  };

  const closeSearch = () => {
    setOpenSearch(false);
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
        <Toolbar
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <Button
            size="large"
            variant="text"
            color="default"
            sx={{
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
        <SearchBox openSearch={openSearch} closeSearch={closeSearch} />
      </AppBar>
      {/* MID SECTION */}
      <Box>hello world!</Box>
      {/* FOOTER */}
      <AppBar
        className="shadowUp"
        position="absolute"
        color="white"
        sx={{ top: "auto", bottom: 0, paddingLeft: 1, paddingRight: 1 }}
      >
        <Toolbar disableGutters={true}>
          <IcoButton>
            <SentimentSatisfiedAltIcon />
          </IcoButton>
          <IcoButton>
            <AttachFileIcon />
          </IcoButton>
          <TextField
            multiline
            maxRows={3}
            sx={{
              width: "100%",
              marginLeft: "4px",
              "& .MuiInput-underline:before": {
                borderBottomColor: "transparent", // Change the underline color before focus
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "transparent", // Remove underline on hover
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "transparent", // Change the underline color after focus
              },
              "& textarea": {
                scrollbarWidth: "thin",
              },
            }}
            id="standard-basic"
            placeholder="Type a message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            variant="standard"
          />
          <IcoButton>
            <MicNoneIcon />
          </IcoButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
