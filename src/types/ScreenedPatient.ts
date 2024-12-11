export interface ScreenedPatient {
    id: number;
    name: string;
    age: number;
    gender: string; // Enum: 'Male' | 'Female' | ...
    medical_diagnosis: string;
    diet_prescription: string;
    weight: number;
    height: number;
    bmi: number;
    risk: string; // Enum: 'Low' | 'Moderate' | 'High'
    clinical_conditions: {
      id: number;
      name: string;
    }[];
    weight_histories: {
      id: number;
      name: string;
    }[];
  }  