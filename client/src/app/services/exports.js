import axios from "axios";
import { authHeader } from "./user.js";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
const API_URL = process.env.API_URL;

export const exportPreferences = async () => {
  const response = await axios.get(`${API_URL}/admin/export`, {
    headers: authHeader(),
    responseType: 'blob',
  });
  return response;
};

export const exportAttendance = async () => {
    const response = await axios.get(`${API_URL}/admin/export/event/attendance`, {

        headers: authHeader(),
        responseType: 'blob',
      });
      
      return response;
};

export const exportMatching = async (userId) => {
  const response = await axios.get(`${API_URL}/admin/export/matching/${userId}`, {
    headers: authHeader(),
    responseType: 'blob',
  });
  return response;
};



