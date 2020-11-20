import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MinimizeIcon from "@material-ui/icons/Minimize";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import "../assets/css/Header.css";
const remote = require("electron").remote;

const useStyles = makeStyles((themes) => ({
  typographyStyle: {
    flexGrow: 1,
  },
  toolbarStyling: {
    minHeight: 40,
    display: "flex",
  },
  imgResize: {
    width: 55,
    height: 35,
  },
  iconStyle: {
    marginLeft: 400,
  },
  minimizeStyle: {
    paddingBottom: 8,
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "optimus",
  },
});

function Header() {
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

  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <CssBaseline />
      <Toolbar className={classes.toolbarStyling}>
        <Grid container direction="row" className="appBarStyle">
          <Grid item container xs={4} alignItems="center">
            <MuiThemeProvider theme={theme}>
              <Typography className={classes.typographyStyle} variant="h5">
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

        <IconButton color="inherit" onClick={closeWindow} className="close-btn">
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
