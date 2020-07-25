import { signUpUser, signInUser } from "../../services/auth.service";
import { AUTHENTICATE_USER } from "../types";

export const createUser = (userData) => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    console.log(user)
    const { token } = user.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const user = await signInUser(userData);
    console.log(user)
    const { token } = user.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }
  }
};


