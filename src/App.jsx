import { useState } from "react";
import "./App.css";
import MiniDrawer from "./MiniDrawer";
import UserSlip from "./UserSlip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 7.8,
        height: "91.6vh",
      }}
    >
      <MiniDrawer />
      <Box
        sx={{
          p: 2,
          m: 0,
          width: "350px",
          height: "100%",
          overflow: "hidden",
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
            <Tooltip title="Filter chats by" placement="top">
              <IconButton>
                <FilterListOutlinedIcon />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Box>
        <TextField
          sx={{
            width: "100%",
            "& .MuiInput-underline:before": {
              borderBottomColor: "var(--accent-color)", // Change the underline color before focus
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
                <InputAdornment position="start">
                  <SearchOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setInputValue("")}
                    edge="end"
                    style={{ visibility: inputValue ? "visible" : "hidden" }} // Hide button if input is empty
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
            gap: 3.5,
            paddingTop: 3,
            paddingRight: 1,
            paddingBottom: 3,
            marginTop: 1,
          }}
        >
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
          <UserSlip />
        </Box>
      </Box>
      <Box sx={{ p: 2, flexGrow: 1 }}></Box>
    </Box>
  );
}

export default App;
// git add . && git commit -m '' && git push origin main
