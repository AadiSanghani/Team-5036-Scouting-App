import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./redux/CombinedReducers";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0157B9",
    },
    secondary: {
      main: "#242424",
    },
  },
});

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
