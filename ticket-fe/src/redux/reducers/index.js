import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
import { LOGOUT } from "../types";

const persistConfig = {
  key: "root",
  storage,
};
const appReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  tickets: ticketReducer,
  errors: errorReducer,
  modal: modalReducer,
});

const rootReducers = (state, action) => {
  // reset to initial state on user logout
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducers(state, action);
};

export default persistReducer(persistConfig, rootReducers);
