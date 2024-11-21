import { Patient } from '../types/Patient';

const API_URL = 'http://127.0.0.1:1337/api';

export async function fetchPatients(): Promise<Patient[]> {
  try {
    const response = await fetch(`${API_URL}/patients`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched patients:', data); // Log the entire response
    return data.data as Patient[];
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
}