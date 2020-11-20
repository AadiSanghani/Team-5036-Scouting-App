import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  Box,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MinimizeIcon from "@material-ui/icons/Minimize";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import "../assets/css/HeaderAndSideNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faRobot,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import DummyComp from "./DummyComp.jsx";
import { connect } from "react-redux";

const remote = require("electron").remote;

const useStyles = makeStyles((themes) => ({
  typographyStyle: {
    flexGrow: 1,
  },
  toolbarStyling: {
    minHeight: 60,
    display: "flex",
  },
  imgResize: {
    width: 55,
    height: 35,
  },
  root: {
    display: "flex",
  },
  iconStyle: {
    marginLeft: 400,
  },
  minimizeStyle: {
    paddingBottom: 8,
  },
  paper: {
    background: "#242424",
  },
  appBar: {
    zIndex: themes.zIndex.drawer + 1,
  },
  drawer: {
    // width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "optimus",
  },
});

function Header(props) {
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
      whenClicked: () => {
        props.onHome;
      },
    },
    {
      text: "Robot",
      icon: (
        <FontAwesomeIcon icon={faRobot} size="3x" className="padding" inverse />
      ),
      whenClicked: () => {
        props.onRobot;
      },
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
      whenClicked: () => {
        props.onController;
      },
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
      whenClicked: () => {
        props.onFlag;
      },
    },
  ];

  function closeWindow(e) {
    e.preventDefault();
    var window = remote.getCurrentWindow();
    window.close();
  }

  function minimizeWindow(e) {
    e.preventDefault();
    var window = remote.getCurrentWindow();
    window.minimize();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <CssBaseline />
        <Toolbar className={classes.toolbarStyling}>
          <Grid container direction="row" className="appBarStyle">
            <Grid item container xs={4} alignItems="center">
              <MuiThemeProvider theme={theme}>
                <Typography className={classes.typographyStyle} variant="h4">
                  {/* <img src={Logo} className={classes.imgResize} /> */}
                  Team 5036
                </Typography>
              </MuiThemeProvider>
            </Grid>
            <Grid item xs={6}></Grid>

            {/* <Grid item container xs={2} justify="flex-end">
         
          </Grid> */}
          </Grid>
          <IconButton color="inherit" onClick={minimizeWindow}>
            <MinimizeIcon className="minimize-btn" />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={closeWindow}
            className="close-btn"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        width="50%"
        classes={{ paper: classes.paper }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="85%"
        >
          <List className="listPadding">
            {itemsList.map((item, index) => {
              const { text, icon, whenClicked } = item;
              return (
                <ListItem button key={text} onClick={whenClicked}>
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

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHome: () => {
      const action = {
        type: "HOME_BUTTON_PRESSED",
        value: 1,
      };
      dispatch(action);
    },
    onRobot: () => {
      const action = {
        type: "ROBOT_BUTTON_PRESSED",
        value: 2,
      };
      dispatch(action);
    },
    onController: () => {
      const action = {
        type: "CONTROLLER_BUTTON_PRESSED",
        value: 3,
      };
      dispatch(action);
    },
    onFlag: () => {
      const action = {
        type: "FLAG_BUTTON_PRESSED",
        value: 4,
      };
      dispatch(action);
    },
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
