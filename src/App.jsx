import { useState } from "react";
import "./App.css";
import MiniDrawer from "./MiniDrawer";
import UserSlip from "./UserSlip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Dropdown from "./Dropdown";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import whatsappLogo from "/whatsapp.svg";
import ChatBox from "./ChatBox";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setClicked] = useState(true);
  const [colorMode, setColorMode] = useState("light");

  function changeTheme(selectedColorMode = "sample text") {
    setColorMode(selectedColorMode);
    console.log(selectedColorMode);
  }

  const darkTheme = createTheme({
    palette: {
      mode: `${"dark" || colorMode}`,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          marginTop: 7.8,
          height: "91.6vh",
        }}
      >
        <MiniDrawer changeTheme={changeTheme} />
        <Box
          sx={{
            p: 2,
            m: 0,
            width: "350px",
            height: "100%",
            overflow: "hidden",
            paddingRight: 0,
            boxShadow:
              "0px 2px 2px 0px rgba(0,0,0,0.14) , 0px 3px 1px -2px rgba(0,0,0,0.12) , 0px 1px 5px 0px rgba(0,0,0,0.2) ",
          }}
        >
          <Box
            className="chatsHeader"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: 0,
              marginRight: 1,
            }}
          >
            <h2 className="title">Chats</h2>
            <ButtonGroup>
              <Tooltip
                title="New chat (Ctrl+N)
             New group (Ctrl+Shift+N)"
                placement="top"
              >
                <IconButton>
                  <CreateOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Dropdown />
            </ButtonGroup>
          </Box>
          <TextField
            sx={{
              width: "95%",
              boxShadow: "rgba(55, 54, 54, 0.2) 0px 2px 8px 0px",
              "& .MuiInput-underline:before": {
                borderBottomColor: "transparent", // Change the underline color before focus
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "transparent", // Remove underline on hover
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "var(--accent-color)", // Change the underline color after focus
              },
            }}
            id="standard-basic"
            // label="Search or start a new chat"
            placeholder="Search or start a new chat"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start" sx={{ marginLeft: 1 }}>
                    <SearchOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 1.5 }}>
                    <IconButton
                      onClick={() => setInputValue("")}
                      edge="end"
                      style={{
                        visibility: inputValue ? "visible" : "hidden",
                        borderRadius: 0,
                      }} // Hide button if input is empty
                    >
                      <CloseOutlinedIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              scrollbarWidth: "thin",
              scrollbarColor: "#e0e0e0 transparent",
              height: "89%",
              gap: 0.5,
              paddingTop: 3,
              // paddingRight: 0,
              paddingBottom: 3,
              marginTop: 1,
            }}
          >
            <UserSlip />
          </Box>
        </Box>
        {!isClicked ? (
          <Box
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
            <img
              src={whatsappLogo}
              width={70}
              style={{ marginBottom: 10 }}
              alt=""
            />
            <Typography variant="h5" gutterBottom>
              WhatsApp for Windows
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 400, opacity: 0.5 }}
            >
              Send and receive messages without keeping your phone online.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 400, opacity: 0.5 }}
            >
              Use WhatsApp on upto 4 linked devices and 1 phone at the same
              time.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: 400,
                opacity: 0.4,
                marginTop: "auto",
              }}
            >
              <LockOutlinedIcon />
              End-to-end encrypted
            </Typography>
          </Box>
        ) : (
          <ChatBox />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
// git add . && git commit -m '' && git push origin main
