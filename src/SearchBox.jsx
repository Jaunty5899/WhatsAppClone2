import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IcoButton from "./IcoButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function SearchBox() {
  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        width: "59%",
        padding: "8px 8px",
        position: "absolute",
        bottom: -65,
        right: 10,
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
        placeholder="Search or start a new chat"
        // value={inputValue}
        // onChange={(event) => setInputValue(event.target.value)}
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
