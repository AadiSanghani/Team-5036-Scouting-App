import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  createMuiTheme,
  MuiThemeProvider,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import "../assets/css/HomePage.css";
import Logo from "../assets/imgs/Logo.png";
import { connect } from "react-redux";

//Styling

const useStyles = makeStyles((theme) => ({
  imgResize: {
    width: 175,
    height: 110,
    marginRight: "1.5%",
  },
  buttonStyle: {
    marginLeft: "45%",
    width: "15%",
    height: "15%",
  },
}));

const optimusFont = createMuiTheme({
  palette: {
    primary: {
      main: "#3E3E3E",
    },
  },
  typography: {
    fontFamily: "optimus",
  },
});

const modernFont = createMuiTheme({
  palette: {
    primary: {
      main: "#3E3E3E",
    },
  },
  typography: {
    fontFamily: "montserrat",
  },
});

//HomePage Function

function HomePage(props) {
  const classes = useStyles();
  document.body.style = "background: #B3B7EE;";

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        // minHeight="100%"
      >
        <MuiThemeProvider theme={optimusFont}>
          <img src={Logo} className={classes.imgResize} />
          <Typography variant="h3" color="primary">
            Team 5036 Scouting System
          </Typography>
        </MuiThemeProvider>
      </Box>

      <MuiThemeProvider theme={modernFont}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={0}
          // style = {{paddingTop}}
          style={{ minHeight: "50vh" }}
        >
          <Grid item xs={3}>
            <TextField
              required
              id="filled-required"
              label="Your Name"
              variant="outlined"
              style={{ width: 400 }}
              color="primary"
              value={props.inputName}
              onChange={props.nameInputChange}
            />
          </Grid>

          <Grid item xs={3} style={{ paddingTop: "4%" }}>
            <TextField
              required
              id="filled-required"
              label="Match Number"
              variant="outlined"
              style={{ width: 400 }}
              color="primary"
              value={props.inputMatchNum}
              onChange={props.matchNumChange}
            />
          </Grid>

          <Grid item xs={3} style={{ paddingTop: "4%" }}>
            <TextField
              required
              id="filled-required"
              label="Team Number (E.g. 5036)"
              variant="outlined"
              style={{ width: 400 }}
              color="primary"
              value={props.inputTeamNum}
              onChange={props.teamNumChange}
            />
          </Grid>
        </Grid>
        <Box display="flex" minHeight="100%">
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStyle}
          >
            Start Scouting!
          </Button>
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

//Redux Stuff

const mapStateToProps = (state) => {
  return {
    inputName: state.Home.inputName,
    inputMatchNum: state.Home.inputMatchNum,
    inputTeamNum: state.Home.inputTeamNum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nameInputChange: (evt) => {
      const action = {
        type: "HOMEPAGE_NAME_INPUT_CHANGE",
        text: evt.target.value,
      };
      dispatch(action);
    },

    matchNumChange: (evt) => {
      const action = {
        type: "HOMEPAGE_MATCHNUM_INPUT_CHANGE",
        matchNumText: evt.target.value,
      };
      dispatch(action);
    },

    teamNumChange: (evt) => {
      const action = {
        type: "HOMEPAGE_TEAMNUM_INPUT_CHANGE",
        matchNumText: evt.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
