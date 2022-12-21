import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (dni, name, username, email, type, password, confirm_password) => {
  return axios.post(API_URL + "register", {
    dni,
    name,
    username,
    email,
    type,
    password,
    confirm_password
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;