import { signUpUser, signInUser } from "../../services/auth.service";
import { AUTHENTICATE_USER, SET_ERROR, LOGOUT } from "../types";
import { AuthToken } from "../../helpers/AuthToken";

export const createUser = (userData) => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    console.log(user);
    const { token } = user.data;
    AuthToken(token);
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const user = await signInUser(userData);
    console.log(user);
    const { token } = user.data;
    AuthToken(token);
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  } catch (error) {
    console.log("Unable to signout", error);
  }
};
