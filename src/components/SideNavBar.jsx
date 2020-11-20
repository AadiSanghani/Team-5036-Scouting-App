import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  Grid,
  makeStyles,
  Box,
} from "@material-ui/core";
import "../assets/css/SideNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faRobot,
  faFlagCheckered,
  faSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  paper: {
    background: "#242424",
  },
});

function SideNavBar() {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: (
        <FontAwesomeIcon
          icon={faHome}
          size="3x"
          className="homePadding"
          inverse
        />
      ),
    },
    {
      text: "Robot",
      icon: (
        <FontAwesomeIcon icon={faRobot} size="3x" className="padding" inverse />
      ),
    },
    {
      text: "Controller",
      icon: (
        <FontAwesomeIcon
          icon={faGamepad}
          size="3x"
          className="padding"
          inverse
        />
      ),
    },
    {
      text: "Flag",
      icon: (
        <FontAwesomeIcon
          icon={faFlagCheckered}
          size="3x"
          className="flagPadding"
          inverse
        />
      ),
    },
  ];

  return (
    <div className="root">
      <Drawer variant="permanent" classes={{ paper: classes.paper }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="85%"
        >
          <List className="listPadding">
            {itemsList.map((item, index) => {
              const { text, icon } = item;
              return (
                <ListItem button key={text}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider />
      </Drawer>
    </div>
  );
}

export default SideNavBar;
