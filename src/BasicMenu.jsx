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
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
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
  const [language, setLanguage] = useState("");

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
    setValue(menuState.item == "Profile" ? 10 : 0);
  }, [menuState]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      ref={divRef}
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
          icon={<VideocamOutlinedIcon sx={{ width: 16, height: 16 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "small",
            minHeight: 32,
            "&.Mui-selected": {
              color: "var(--accent-color)",
            },
          }}
          label="Video & voice"
          iconPosition="start"
          {...a11yProps(3)}
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
          {...a11yProps(4)}
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
          {...a11yProps(5)}
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
          {...a11yProps(6)}
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
          {...a11yProps(7)}
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
          {...a11yProps(8)}
        />
        <Box sx={{ height: 155 }} />
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
          {...a11yProps(9)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
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
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{
                    width: "70%",
                    height: "35px",
                  }}
                >
                  <MenuItem id="demo-simple-select" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem id="demo-simple-select" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="generalItem">
            <h4 className="generalItemTitle">Typing</h4>
            <div className="typingContainer">
              Change typing settings for autocorrect and misspelled highlight
              from <a href="#">Windows Settings</a>.
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
              <a href="#">Profile</a>.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Ten
      </TabPanel>
    </Box>
  );
}
