import homePageReducer from "./HomePageReducer";
import SideBarReducer from "./SideBarReducer";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  Sidebar: SideBarReducer,
  Home: homePageReducer,
});

const store = createStore(reducer);

export default store;
