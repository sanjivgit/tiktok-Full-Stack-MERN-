import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-sanjiv.herokuapp.com",
});

export default instance;
