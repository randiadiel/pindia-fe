import Axios from "axios";
import { API } from "./ApiConfig";

class Api {
  handlePost = async (endpoint, data) => {
    const response = await Axios.post(API.BASE_URL + endpoint, data, {});
    return response;
  };
  handleGet = async (endpoint) => {
    const promise = await Axios.get(API.BASE_URL + endpoint);
    const response = await promise;
    return response;
  };
}

export default new Api();
