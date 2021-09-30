import * as types from "./theme.types";

const initialState = {
  variant: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return {
        ...state,
        variant: state.variant === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export default themeReducer;
