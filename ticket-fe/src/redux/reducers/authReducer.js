import _ from "lodash";
import { AUTHENTICATE_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload), // check if payload is empty
        token: action.payload,
      };
    default:
      return state;
  }
};
