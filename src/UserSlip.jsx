import "./UserSlip.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function UserSlip() {
  return (
    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
      <Avatar sx={{ width: 48, height: 48 }} />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span className="userName">User</span>
          <span className="lastMessageTime">9:45PM</span>
        </Box>
        <Box>
          <span className="lastMessage">are ya winning son????</span>
        </Box>
      </Box>
    </Box>
  );
}
