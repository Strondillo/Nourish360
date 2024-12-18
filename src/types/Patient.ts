 // src/types/Patient.ts
export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  diagnosis: string;
  weight: number;
  height: number;
  bmi: number;
  estimated_energy_intake: number;
  physical_activity: string;
  meals: string;
  motivation_importance: number;
  motivation_confidence: number;
  motivation_readiness: number;
  birthday: number; 
  risk: string;           // Add this line
  visits: number;         // Add this line
  isNew: boolean;         // Add this line
  profileImage: string;   // Add this line
  // Add other properties as needed based on your data structure
}