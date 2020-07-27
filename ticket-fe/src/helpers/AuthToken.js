import axios from "axios";

const AuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  } else {
    // when the user logs out
    delete axios.defaults.headers.common["authorization"];
  }
};

export { AuthToken };
