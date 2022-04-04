import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://127.0.0.1:8000/schoollist";

const getSchoolList = () => {
  return axios.get(API_URL, { headers: authHeader() });
};
const SchoolService = {
  getSchoolList,
};
export default SchoolService;