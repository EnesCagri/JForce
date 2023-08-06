import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/inventories";

class InventoryService {
  getInventories() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  getAvailableInventories() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/details");
  }

  createInventory(inventory) {
    return axios.post(EMPLOYEE_API_BASE_URL, inventory);
  }

  getInventoryById(inventoryId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + inventoryId);
  }

  updateInventory(inventory, inventoryId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + inventoryId, inventory);
  }

  deleteInventoryById(inventoryId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + inventoryId);
  }
}

export default new InventoryService();
