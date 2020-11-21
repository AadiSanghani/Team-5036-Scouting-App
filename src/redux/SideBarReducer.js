const initialState = {
  currentPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HOME_BUTTON_PRESSED":
      return { currentPage: action.value };
    case "ROBOT_BUTTON_PRESSED":
      return { currentPage: action.value };
    case "CONTROLLER_BUTTON_PRESSED":
      return { currentPage: action.value };
    case "FLAG_BUTTON_PRESSED":
      return { currentPage: action.value };

    default:
      return state;
  }
};

// export default SideBarReducer;
