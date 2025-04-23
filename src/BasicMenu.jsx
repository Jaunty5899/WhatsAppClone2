import React, { useRef, useEffect, useState } from "react";
import "./BasicMenu.css";
import ColorBox from "./ColorBox";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import Button from "@mui/material/Button";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import notificationLogo from "/Capture.svg";
import Divider from "@mui/material/Divider";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import CheckboxLabels from "./CheckboxLabels";
import { InvertColors } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BasicMenu({ menuState, stateChangeFunction }) {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(menuState.state);
  const divRef = useRef(null);
  const [language, setLanguage] = useState("System Default");
  const [bannerNotification, setBannerNotification] = useState("Always");
  const [messageTone, setMessageTone] = useState("Default");
  const [groupTone, setGroupTone] = useState("Default");
  const [selectedColor, setSelectedColor] = useState("");

  const setColor = (color) => {
    setSelectedColor(color);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false);
      stateChangeFunction();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(menuState.state);
    setValue(menuState.item == "Profile" ? 9 : 0);
  }, [menuState]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      ref={divRef}
      id="basicMenu"
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        width: 500,
        height: 500,
        position: "absolute",
        bottom: "1%",
        left: ".5%",
        zIndex: 1200,
        borderRadius: 2,
        clipPath: `circle(${isOpen ? 150 : 0}% at 0 100%)`,
        transition: "clip-path 0.25s ease-in-out",
        boxShadow:
          "0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) ",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator": {
            left: 5,
            width: "3px",
            borderRadius: 2,
            backgroundColor: "var(--accent-color)",
          },
        }}
      >
        <Tab
          icon={<ComputerOutlinedIcon sx={{ width: 16, height: 16 }} />}
          label="General"
          iconPosition="start"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          {...a11yProps(0)}
        />
        <Tab
          icon={<KeyOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Account"
          iconPosition="start"
          {...a11yProps(1)}
        />
        <Tab
          icon={<QuestionAnswerOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Chats"
          iconPosition="start"
          {...a11yProps(2)}
        />
        <Tab
          icon={<NotificationsOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Notifications"
          iconPosition="start"
          {...a11yProps(3)}
        />
        <Tab
          icon={<BrushOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Personalization"
          iconPosition="start"
          {...a11yProps(4)}
        />
        <Tab
          icon={<StorageOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Storage"
          iconPosition="start"
          {...a11yProps(5)}
        />
        <Tab
          icon={<KeyboardAltOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Shortcuts"
          iconPosition="start"
          {...a11yProps(6)}
        />
        <Tab
          icon={<InfoOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Help"
          iconPosition="start"
          {...a11yProps(7)}
        />
        <Box sx={{ height: 180 }} />
        <Tab
          icon={
            <Avatar
              sx={{
                width: 16,
                height: 16,
              }}
            />
          }
          sx={{
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Profile"
          iconPosition="start"
          {...a11yProps(8)}
        />
      </Tabs>
      <TabPanel value={value} index={0} id="general">
        <h3 className="title general">General</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Login</h4>
            <div className="switchContainer">
              <span className="typingContainer">Start WhatsApp at login</span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Language</h4>
            <div className="dropDownContainer">
              <LanguageOutlinedIcon
                sx={{
                  width: 18,
                  height: 18,
                  marginLeft: 1,
                  marginRight: 1,
                  color: "var(--accent-color)",
                }}
              />
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{
                    width: "100%",
                    height: "35px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem id="demo-simple-select" value="System Default">
                    System Default
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="English">
                    English
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Hindi">
                    Hindi
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Malayalam">
                    Malayalam
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Typing</h4>
            <div className="typingContainer">
              Change typing settings for autocorrect and misspelled highlight
              from{" "}
              <a href="#" className="link">
                Windows Settings
              </a>
              .
            </div>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Replace text with emoji</h4>
            <div className="switchContainer">
              <span className="typingContainer thisText">
                Emoji will replace specific text as you type.
              </span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="😁"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem lastItem">
            <div className="typingContainer">
              To log out of WhatsApp on this computer go to your{" "}
              <a href="#" className="link">
                Profile
              </a>
              .
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} id="general">
        <h3 className="title general">Account</h3>
        <div className="generalContainer thisOne">
          <div className="generalItem">
            <h4 className="generalItemTitle">Privacy</h4>
            <div className="typingContainer" style={{ fontStyle: "italic" }}>
              Managed on your phone.
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Last seen and online</div>
            <div>Nobody</div>
            <div className="typingContainer description">
              If you don't share your last seen, you won't be able to see other
              people's Last Seen.
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Profile photo</div>
            <div>My contacts except...</div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">About</div>
            <div>My contacts except...</div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Add to groups</div>
            <div>My contacts</div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Read receipts</div>
            <div>Off</div>
            <div className="typingContainer description">
              Read receipts are always sent for group chats.
            </div>
          </div>
        </div>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Blocked contacts</h4>
            <div className="typingContainer" style={{ fontStyle: "italic" }}>
              Managed on your phone.
            </div>
            <div
              className="typingContainer iconWithText"
              style={{ marginTop: "10px" }}
            >
              <PhoneAndroidOutlinedIcon
                sx={{ width: 18, height: 18, marginRight: 1 }}
              />
              No blocked contacts
            </div>
          </div>
        </div>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Security</h4>
            <div className="typingContainer">
              Messages and calls are end-to-end encrypted chats stay between you
              and the people you choose. Not even WhatsApp can read or listen to
              them.{" "}
              <a href="#" className="link">
                Learn more
              </a>
            </div>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              Show security notifications on this computer
            </div>
            <FormControl
              component="fieldset"
              sx={{ marginTop: "10px", marginLeft: "10px" }}
            >
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  control={<Switch color="success" size="small" />}
                  label="Off"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              Get notified when your security code changes for a contact's
              phone. If you have multiple devices, this setting must be enabled
              on each device where you want to get notifications.{" "}
              <a href="#" className="link">
                Learn more
              </a>
            </div>
            <a
              href="#"
              className="link"
              style={{ display: "block", marginTop: "20px" }}
            >
              How to delete my account
            </a>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} id="general">
        <h3 className="title general">Chats</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Chat history</h4>
            <div
              className="typingContainer iconWithText"
              style={{ marginTop: "10px" }}
            >
              <PhonelinkOutlinedIcon
                sx={{ width: 18, height: 18, marginRight: 1 }}
              />
              Synced with your phone
            </div>
          </div>
          <div className="generalItem">
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                color: "var(--accent-color)",
                borderColor: "var(--accent-color)",
              }}
            >
              Archive all chats
            </Button>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              You will still receive new messages from archived chats.
            </div>
          </div>
          <div className="generalItem">
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                color: "red",
                borderColor: "red",
              }}
            >
              Clear all messages
            </Button>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              Delete all messages from chats and groups.
            </div>
          </div>
          <div className="generalItem">
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                color: "red",
                borderColor: "red",
              }}
            >
              Delete all chats
            </Button>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              Delete all messages and clear the chats from your history.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} id="general">
        <h3 className="title general">Notifications</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <img src={notificationLogo} alt="" style={{ scale: 0.95 }} />
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">
              Show banner notifications
            </div>
            <div className="dropDownContainer">
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={bannerNotification}
                  onChange={(e) => setBannerNotification(e.target.value)}
                  sx={{
                    width: "100%",
                    height: "35px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem id="demo-simple-select" value="Always">
                    Always
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Never">
                    Never
                  </MenuItem>
                  <MenuItem
                    id="demo-simple-select"
                    value="Only when app is open"
                  >
                    Only when app is open
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">
              Show taskbar notification badge
            </div>
            <div className="dropDownContainer">
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={bannerNotification}
                  onChange={(e) => setBannerNotification(e.target.value)}
                  sx={{
                    width: "100%",
                    height: "35px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem id="demo-simple-select" value="Always">
                    Always
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Never">
                    Never
                  </MenuItem>
                  <MenuItem
                    id="demo-simple-select"
                    value="Only when app is open"
                  >
                    Only when app is open
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="switchContainer">
              <span className="typingContainer">Messages</span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="switchContainer">
              <span className="typingContainer">Calls</span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Reactions</div>
            <div className="switchContainer">
              <span className="typingContainer thisText">
                Show notifications for reactions to messages you send
              </span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Status reactions</div>
            <div className="switchContainer">
              <span className="typingContainer thisText">
                Show notifications when you get likes on a status
              </span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <Divider
            sx={{
              width: `${100}%`,
              margin: "10px auto",
            }}
          />
          <div className="generalItem">
            <div className="typingContainer subTitle">Text preview</div>
            <div className="switchContainer">
              <span className="typingContainer thisText">
                Show message preview text inside new message notifications
              </span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Media Preview</div>
            <div className="switchContainer">
              <span className="typingContainer thisText">
                Show media preview images inside new message notifications
              </span>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Switch color="success" size="small" />}
                    label="Off"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <Divider
            sx={{
              width: `${100}%`,
              margin: "10px auto",
            }}
          />
          <div className="generalItem">
            <h4 className="generalItemTitle">Notification tones</h4>
            <div className="typingContainer subTitle">Messages</div>
            <div className="groupDropdown">
              <Button
                variant="outlined"
                sx={{
                  color: "var(--accent-color)",
                  borderColor: "var(--accent-color)",
                }}
              >
                <PlayArrowOutlinedIcon />
              </Button>
              <div className="dropDownContainer thisDropDown">
                <MusicNoteOutlinedIcon
                  sx={{
                    width: 18,
                    height: 18,
                    marginLeft: 1,
                    marginRight: 1,
                    color: "var(--accent-color)",
                  }}
                />
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={messageTone}
                    onChange={(e) => setMessageTone(e.target.value)}
                    sx={{
                      width: "100%",
                      height: "35px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  >
                    <MenuItem id="demo-simple-select" value="Default">
                      Default
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 1">
                      Alert 1
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 2">
                      ALert 2
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 3">
                      Alert 3
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="typingContainer subTitle">Groups</div>
            <div className="groupDropdown">
              <Button
                variant="outlined"
                sx={{
                  color: "var(--accent-color)",
                  borderColor: "var(--accent-color)",
                }}
              >
                <PlayArrowOutlinedIcon />
              </Button>
              <div className="dropDownContainer thisDropDown">
                <MusicNoteOutlinedIcon
                  sx={{
                    width: 18,
                    height: 18,
                    marginLeft: 1,
                    marginRight: 1,
                    color: "var(--accent-color)",
                  }}
                />
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={groupTone}
                    onChange={(e) => setGroupTone(e.target.value)}
                    sx={{
                      width: "100%",
                      height: "35px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  >
                    <MenuItem id="demo-simple-select" value="Default">
                      Default
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 1">
                      Alert 1
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 2">
                      ALert 2
                    </MenuItem>
                    <MenuItem id="demo-simple-select" value="Alert 3">
                      Alert 3
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} id="general">
        <h3 className="title general">Personalisation</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Theme</h4>
            <div className="typingContainer subTitle">App color theme</div>
            <div className="dropDownContainer">
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{
                    width: "100%",
                    height: "35px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem id="demo-simple-select" value="System Default">
                    <ColorLensOutlinedIcon
                      sx={{
                        width: 18,
                        height: 18,
                        marginRight: 1,
                        color: "var(--accent-color)",
                      }}
                    />
                    System Default
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Light">
                    <LightModeOutlinedIcon
                      sx={{
                        width: 18,
                        height: 18,
                        marginRight: 1,
                        color: "var(--accent-color)",
                      }}
                    />
                    Light
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value="Dark">
                    <DarkModeOutlinedIcon
                      sx={{
                        width: 18,
                        height: 18,
                        marginRight: 1,
                        color: "var(--accent-color)",
                      }}
                    />
                    Dark
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Chat wallpaper</h4>
            <div className="colorBoxes">
              {[
                "rgba(246, 246, 240)",
                "rgba(192, 226, 212)",
                "rgba(177, 228, 197)",
                "rgba(170, 212, 242)",
                "rgba(219, 223, 245)",
                "rgba(244, 198, 203)",
                "rgba(245, 114, 114)",
                "rgba(251, 224, 179)",
                "rgba(246, 241, 212)",
                "rgba(217, 217, 217)",
                "rgba(162, 226, 211)",
                "rgba(198, 200, 244)",
                "rgba(181, 242, 131)",
                "rgba(234, 147, 216)",
                "rgba(246, 166, 166, 1) 0%, rgba(246, 231, 143, 1) 25%, rgba(176, 236, 180, 1) 50%, rgba(156, 212, 246, 1) 75%, rgba(210, 166, 246, 1))",
              ].map((bgcolor) => (
                <ColorBox
                  bgcolor={bgcolor}
                  selected={bgcolor == selectedColor ? true : false}
                  setColor={setColor}
                />
              ))}
            </div>
          </div>
          <div className="generalItem">
            <CheckboxLabels>WhatsApp doodle</CheckboxLabels>
            <Button
              variant="outlined"
              sx={{
                marginTop: 1,
                padding: "2px 40px",
                color: "black",
                borderColor: "grey",
              }}
            >
              Reset
            </Button>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Text size</h4>
            <div className="dropDownContainer">
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={"100%"}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{
                    width: "100%",
                    height: "35px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem id="demo-simple-select" value="100%">
                    100%
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="typingContainer" style={{ marginTop: "10px" }}>
              Use Ctrl +/- to increase or decrease your text size
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5} id="general">
        <h3 className="title general">Storage</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Automatic downloads</h4>
            <div className="typingContainer" style={{ opacity: 0.7 }}>
              Choose which media will be automatically downloaded from the
              messages you receive
            </div>
            <div style={{ marginTop: 10, marginLeft: 5 }}>
              <CheckboxLabels>Photos</CheckboxLabels>
              <CheckboxLabels>Audio</CheckboxLabels>
              <CheckboxLabels>Videos</CheckboxLabels>
              <CheckboxLabels>Documents</CheckboxLabels>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6} id="general">
        <h3 className="title general">Shortcuts</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">Keyboard shortcuts</h4>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={7} id="general">
        <h3 className="title general">Help</h3>
        <div className="generalContainer">
          <div className="generalItem">
            <h4 className="generalItemTitle">WhatsApp for Windows</h4>
            <div className="typingContainer subTitle">Version X.XXXX.X.X</div>
          </div>
          <div className="generalItem" style={{ marginTop: 40 }}>
            <h4 className="generalItemTitle">Contact us</h4>
            <div className="typingContainer subTitle">
              We'd like to know your thoughts about this app.
            </div>
            <a href="#" className="link">
              Contact us
            </a>
            <a href="#" className="link">
              Rate the app
            </a>
          </div>
          <div className="generalItem">
            <a href="#" className="link">
              Help Center
            </a>
            <a href="#" className="link">
              Licenses
            </a>
            <a href="#" className="link">
              Terms and Privacy Policy
            </a>
          </div>
          <div className="generalItem">
            <div
              className="typingContainer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                marginTop: 40,
              }}
            >
              2025 <span style={{ fontSize: 20 }}>©</span> WhatsApp Inc.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={9} id="general">
        <div className="generalContainer" style={{ marginTop: 0 }}>
          <div className="generalItem">
            <Avatar
              sx={{
                width: 100,
                height: 100,
                marginBottom: 2,
              }}
            />
          </div>
          <div className="generalItem">
            <h3 className="title general">Jaunty</h3>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">About</div>
            <div>Sleeping</div>
          </div>
          <div className="generalItem">
            <div className="typingContainer subTitle">Phone number</div>
            <div>+91 XXXXXXXXXX</div>
          </div>
          <div className="generalItem">
            <Button
              variant="outlined"
              sx={{
                marginTop: 4,
                color: "red",
                borderColor: "red",
              }}
            >
              Logout
            </Button>
            <div
              className="typingContainer"
              style={{ opacity: 0.7, marginTop: 4 }}
            >
              Chat history on this computer will be cleared when you log out.
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
