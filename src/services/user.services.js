import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'https://intotu-test.winfad.com/api/'

const getShippingCount = () => {
  return axios.get(`${API_URL}shipments/status-summary`,{ headers: authHeader() })
}

const getShippingList = () => {
  return axios.get(`${API_URL}shipments`,{ headers: authHeader() })
}
export default {
  getShippingCount,
  getShippingList
}