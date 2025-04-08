import React, { useRef, useEffect, useState } from "react";
import "./BasicMenu.css";
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
      <TabPanel value={value} index={4} id="general">
        Item Six
      </TabPanel>
      <TabPanel value={value} index={5} id="general">
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={6} id="general">
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={7} id="general">
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={9} id="general">
        Item Ten
      </TabPanel>
    </Box>
  );
}
