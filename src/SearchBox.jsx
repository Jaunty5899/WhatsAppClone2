import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IcoButton from "./IcoButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function SearchBox({ openSearch, closeSearch }) {
  const [chatSearchInput, setChatSearchInput] = useState("");
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      closeSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Box
      ref={searchRef}
      sx={{
        boxShadow: "rgba(55, 54, 54, 0.2) 0px 2px 8px 0px",
        width: "656px",
        padding: "8px 8px",
        position: "absolute",
        bottom: -65,
        right: 10,
        display: "flex",
        alignItems: "center",
        clipPath: `circle(${openSearch ? 150 : 0}% at 100% 50%)`,
        transition: "clip-path 0.25s ease-in-out",
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
      <IcoButton toggleSearch={closeSearch}>
        <CloseOutlinedIcon />
      </IcoButton>
    </Box>
  );
}
