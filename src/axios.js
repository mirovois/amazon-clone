import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/clone-3bf30/us-central1/api",
  // baseURL: "https://us-central1-clone-3bf30.cloudfunctions.net/api ",
  baseURL: "https://amazon-miro.herokuapp.com",
  // the API (cloud function) URL
});
export default instance;
