import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Ingejan/trekkingfietsen",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "content-Type": "application/json",
  },
});

export default {
  getBikes() {
    return apiClient.get("/bikes");
  },
  getBike(id) {
    return apiClient.get("/bikes/" + id);
  },
};
