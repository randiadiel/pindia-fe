import axios from "axios";
import { API } from "../api/ApiConfig";

class AuthServices {
  login(credentials) {
    return axios.post(`${API.BASE_URL}/login`, credentials);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  getAuthHeader() {
    return { headers: { Authorization: `Bearer ${this.getUserInfo().token}` } };
  }

  logout() {
    localStorage.removeItem("userInfo");
    return axios.post(`${API.BASE_URL}/logout`, {}, this.getAuthHeader());
  }
}

export default new AuthServices();
