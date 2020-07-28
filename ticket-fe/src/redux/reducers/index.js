import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ticketReducer from "./ticketReducer";

const persistConfig = {
  key: "root",
  storage,
};
const appReducers = combineReducers({
  auth: authReducer,
  user: "",
  ticket: ticketReducer,
  errors: errorReducer,
});

const rootReducers = (state, action) => {
  return appReducers(state, action);
};

export default persistReducer(persistConfig, rootReducers);
