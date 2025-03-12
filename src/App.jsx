import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
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
  return (
    <Box
      sx={{
        border: "1px solid grey",
        display: "flex",
        position: "relative",
        top: "62px",
        height: "91.7vh",
      }}
    >
      <MiniDrawer />
      <Box
        sx={{
          p: 2,
          m: 0,
          width: "350px",
          scrollbarWidth: "thin",
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
          sx={{ width: "100%" }}
          id="standard-basic"
          label="Search or start a new chat"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <Box sx={{ paddingTop: 3 }}>
          <UserSlip />
        </Box>
      </Box>
      <Box sx={{ p: 2, flexGrow: 1 }}></Box>
    </Box>
  );
}

export default App;
