import { useState } from "react";
import BasicMenu from "./BasicMenu";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { v4 as uuid } from "uuid";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ changeTheme }) {
  console.log(`MiniDrawer console log:${changeTheme}`);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const stateChangeFunction = () => {
    setMenuState(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <Tooltip title="Open Navigation">
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "var(--accent-color)" }}
          >
            WhatsApp Clone
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ display: "flex" }} variant="permanent" open={open}>
        <DrawerHeader>
          <Tooltip title="Close Navigation">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Tooltip>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Chats",
            "Calls",
            "Status",
            "Starred messages",
            "Archived chats",
            "Settings",
            "Profile",
          ].map((text, index) => (
            <ListItem key={uuid()} disablePadding sx={{ display: "block" }}>
              <Tooltip title={text} placement="top">
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                  onClick={() => {
                    if (text == "Settings" || text == "Profile") {
                      setMenuState({ state: true, item: text });
                    }
                    handleDrawerClose();
                    setSelectedItem(text);
                  }}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {(() => {
                      switch (text) {
                        case "Chats":
                          return (
                            <ChatOutlinedIcon
                              sx={
                                selectedItem == text && {
                                  color: "var(--accent-color)",
                                }
                              }
                            />
                          );
                        case "Calls":
                          return (
                            <CallOutlinedIcon
                              sx={
                                selectedItem == text && {
                                  color: "var(--accent-color)",
                                }
                              }
                            />
                          );
                        case "Status":
                          return (
                            <AutoModeOutlinedIcon
                              sx={
                                selectedItem == text && {
                                  color: "var(--accent-color)",
                                }
                              }
                            />
                          );
                        case "Starred messages":
                          return (
                            <StarBorderOutlinedIcon
                              sx={
                                selectedItem == text && {
                                  color: "var(--accent-color)",
                                }
                              }
                            />
                          );
                        case "Archived chats":
                          return (
                            <Inventory2OutlinedIcon
                              sx={
                                selectedItem == text && {
                                  color: "var(--accent-color)",
                                }
                              }
                            />
                          );
                        case "Settings":
                          return <SettingsOutlinedIcon />;
                        case "Profile":
                          return <Avatar sx={{ width: 24, height: 24 }} />;
                        default:
                          return null;
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Tooltip>
              {(text == "Status" || text == "Archived chats") && (
                <Divider
                  sx={{
                    width: 30,
                    margin: "10px auto 10px auto",
                  }}
                />
              )}
              {text == "Status" && <Box sx={{ height: 280 }} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <BasicMenu
        changeTheme={changeTheme}
        menuState={menuState}
        stateChangeFunction={stateChangeFunction}
      />
    </Box>
  );
}
