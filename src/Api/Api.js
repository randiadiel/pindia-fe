import axios from "axios";
import { API } from "./ApiConfig";

class Api {
  handlePost = async (endpoint, data) => {
    const promise = new Promise((resolve, reject) => {
      axios.post(API.BASE_URL + endpoint, data).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return promise;
  };
  handleGet = async (endpoint) => {
    const promise = new Promise((resolve, reject) => {
      axios.get(API.BASE_URL + endpoint).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return promise;
  };
}

export default new Api();
