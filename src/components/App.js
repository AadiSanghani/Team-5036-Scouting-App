import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./HeaderAndSideNavBar.jsx";
import HomePage from "./HomePage.jsx";
// import { store } from "../redux/CombinedReducers.js";
import store from "../redux/HomePageReducer";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      {/* SideBar */}
      <Grid item container>
        <Grid item xs={1}>
          {/* <SideNavBar /> */}
        </Grid>
        {/* The Middel Picture */}
        <Grid item xs={11}>
          <HomePage store={store} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
