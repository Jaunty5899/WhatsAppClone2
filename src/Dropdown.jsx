import { useState } from "react";
import "./Dropdown.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        className="thisDropdown"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterListOutlinedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <span className="filterMenuTitle">Filter chats by</span>
        <MenuItem>
          <ListItemIcon>
            <MarkUnreadChatAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Unread</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Favorites</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Contacts</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NoAccountsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Non-contacts</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GroupOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Groups</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Drafts</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
