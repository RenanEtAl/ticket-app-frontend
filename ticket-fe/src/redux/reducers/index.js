import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducers = combineReducers({
  auth: authReducer,
  user: "",
  ticket: "",
  errors: "",
});

const rootReducers = (state, action) => {
  return appReducers(state, action);
};

export default rootReducers;
