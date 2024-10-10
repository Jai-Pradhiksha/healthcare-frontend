import axios from "axios";

const API_URL = "http://localhost:8082/api/v1/healthcare";

const AuthService = {
  login: (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
  },
  register: (newUser) => {
    return axios.post(`${API_URL}/register`, newUser);
  },
};

export default AuthService;
