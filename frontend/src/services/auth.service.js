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
      console.log(response.data);
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.data.token);
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

const userId = () => {
  // return getCurrentUser().data.id;
  return JSON.parse(localStorage.getItem("user.data.id"));
} 

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  userId,
};

export default AuthService;