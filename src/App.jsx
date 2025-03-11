import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MiniDrawer from "./MiniDrawer";
import Box from "@mui/material/Box";

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
      <Box sx={{ p: 2, m: 0, border: "1px dashed grey", flexGrow: 0.3 }}>
        <h3>Chats</h3>
      </Box>
      <Box sx={{ p: 2, border: "1px dashed grey", flexGrow: 1 }}>
        This Box renders as an HTML section element.
      </Box>
    </Box>
  );
}

export default App;
