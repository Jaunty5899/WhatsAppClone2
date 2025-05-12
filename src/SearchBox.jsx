import { useState } from "react";
import "./SearchBox.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IcoButton from "./IcoButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Opacity } from "@mui/icons-material";

export default function SearchBox({ openSearch }) {
  const [chatSearchInput, setChatSearchInput] = useState();
  return (
    <Box
      sx={{
        boxShadow: "rgba(55, 54, 54, 0.2) 0px 2px 8px 0px",
        width: "656px",
        padding: "8px 8px",
        position: "absolute",
        bottom: -65,
        right: 10,
        display: "flex",
        alignItems: "center",
        clipPath: `circle(${openSearch ? 150 : 0}% at 0 100%)`,
        transition: "clip-path 5s",
      }}
    >
      <TextField
        sx={{
          width: "70%",
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
        placeholder="Search within chat"
        value={chatSearchInput}
        onChange={(event) => setChatSearchInput(event.target.value)}
        variant="standard"
      />
      <IcoButton>
        <KeyboardArrowUpOutlinedIcon />
      </IcoButton>
      <IcoButton>
        <KeyboardArrowDownOutlinedIcon />
      </IcoButton>
      <IcoButton>
        <CalendarMonthOutlinedIcon />
      </IcoButton>
      <IcoButton>
        <CloseOutlinedIcon />
      </IcoButton>
    </Box>
  );
}
