import axios from "axios";

const API_ENDPOINT = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUpUser = async (userData) => {
  const response = await axios.post(
    `${API_ENDPOINT}/register`,
    userData,
    config
  );
  return response;
};

export const signInUser = async (userData) => {
  const response = await axios.post(`${API_ENDPOINT}/login`, userData, config);
  return response;
};
