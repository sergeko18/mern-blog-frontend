import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1825",
});

export default instance;
