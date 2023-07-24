import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/users";
const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/login";

class UserService {
  getUsers() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createUser(user) {
    return axios.post(EMPLOYEE_API_BASE_URL, user);
  }

  getUserById(userId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + userId);
  }

  updateUser(user, userId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + userId);
  }

  getAuth(loginRequirements) {
    return axios.post(LOGIN_API_BASE_URL, loginRequirements);
  }
}

export default new UserService();
