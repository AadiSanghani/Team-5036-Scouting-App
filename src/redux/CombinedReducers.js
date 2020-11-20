import homePageReducer from "./HomePageReducer";
import SideBarReducer from "./SideBarReducer";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ homePageReducer, SideBarReducer }));
// const store = createStore(homePageReducer);
export default store;
