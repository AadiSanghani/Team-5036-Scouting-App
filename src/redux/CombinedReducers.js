import homePageReducer from "./HomePageReducer";
import SideBarReducer from "./SideBarReducer";
import { createStore, combineReducers } from "redux";

// const store = createStore(homePageReducer);
// // const store = createStore(combineReducers({ homePageReducer, SideBarReducer }));

const reducer = combineReducers({
  //   HomePageReducer: homePageReducer,
  Sidebar: SideBarReducer,
  Home: homePageReducer,
});

const store = createStore(reducer);

export default store;
