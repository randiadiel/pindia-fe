import axios from "axios";
import { API } from "./ApiConfig";
import AuthServices from "../auth/AuthServices";

class Api {
  handlePost = async (endpoint, data, isPrivate) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(
          API.BASE_URL + endpoint,
          data,
          isPrivate ? AuthServices.getAuthHeader() : {}
        )
        .then(
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
  handleGet = async (endpoint, isPrivate) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(
          API.BASE_URL + endpoint,
          isPrivate ? AuthServices.getAuthHeader() : {}
        )
        .then(
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
  handleGetParams = async (endpoint, params, isPrivate) => {
    const config = {
      headers: isPrivate ? AuthServices.getAuthHeader() : {},
      params,
    };
    const promise = new Promise((resolve, reject) => {
      axios.get(API.BASE_URL + endpoint, config).then(
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
