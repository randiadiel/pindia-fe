import axios from "axios";
import { API } from "../api/ApiConfig";

class AuthServices {
  login(credentials) {
    const promise = new Promise((resolve, reject) => {
      axios.post(`${API.BASE_URL}/login`, credentials).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return promise;
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
    localStorage.clear();
  }
}

export default new AuthServices();
