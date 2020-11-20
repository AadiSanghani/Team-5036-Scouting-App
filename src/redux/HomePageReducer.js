import { createStore } from "redux";

const initialState = {
  inputName: "",
  inputMatchNum: "",
  inputTeamNum: "",
};

// const HomePageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "HOMEPAGE_NAME_INPUT_CHANGE":
//       return Object.assign({}, state, { inputName: action.text });

//     case "HOMEPAGE_MATCHNUM_INPUT_CHANGE":
//       return Object.assign({}, state, { inputMatchNum: action.matchNumText });

//     case "HOMEPAGE_TEAMNUM_INPUT_CHANGE":
//       return Object.assign({}, state, { inputTeamNum: action.matchNumText });

//     default:
//       return state;
//   }
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case "HOMEPAGE_NAME_INPUT_CHANGE":
      return Object.assign({}, state, { inputName: action.text });

    case "HOMEPAGE_MATCHNUM_INPUT_CHANGE":
      return Object.assign({}, state, { inputMatchNum: action.matchNumText });

    case "HOMEPAGE_TEAMNUM_INPUT_CHANGE":
      return Object.assign({}, state, { inputTeamNum: action.matchNumText });

    default:
      return state;
  }
};

// const store = createStore(HomePageReducer);

// export default store;
