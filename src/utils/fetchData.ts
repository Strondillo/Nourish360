import axios from 'axios';

const API_URL = 'http://localhost:1337/api'; // Update with your Strapi URL

export async function fetchUsers() {
  const response = await axios.get(`${API_URL}/customusers`);
  return response.data.data; // Adjust based on your API response structure
}

export async function fetchScreenedPatients() {
  const response = await axios.get(`${API_URL}/screenedpatients`);
  return response.data.data; // Adjust based on your API response structure
}
