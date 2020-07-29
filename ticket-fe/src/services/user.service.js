import axios from "axios";

const API_ENDPOINT = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getUserData = async () => {
  const response = await axios.get(`${API_ENDPOINT}/user`, config);
  return response;
};
