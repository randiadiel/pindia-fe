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
    return {
      headers: { Authorization: `Bearer ${this.getUserInfo().access_token}` },
    };
  }

  logout() {
    localStorage.removeItem("userInfo");
  }
}

export default new AuthServices();
