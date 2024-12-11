import type { ScreenedPatient } from "../types/ScreenedPatient";

export async function fetchScreenedPatients(): Promise<ScreenedPatient[]> {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/screened-patients?populate=*"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch screened patients: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || !data.data) {
      throw new Error("Invalid API response: Missing 'data' field");
    }

    return data.data.map((screenedPatient: any) => ({
      id: screenedPatient.id,
      name: screenedPatient.name,
      age: screenedPatient.age,
      gender: screenedPatient.gender,
      medical_diagnosis: screenedPatient.medical_diagnosis || "",
      diet_prescription: screenedPatient.diet_prescription || "",
      weight: screenedPatient.weight,
      height: screenedPatient.height,
      bmi: screenedPatient.bmi,
      risk: screenedPatient.risk,
      clinical_conditions: screenedPatient.clinical_conditions?.map((condition: any) => ({
        id: condition.id,
        name: condition.name,
      })) || [],
      weight_histories: screenedPatient.weight_histories?.map((history: any) => ({
        id: history.id,
        name: history.name,
      })) || [],
    }));
  } catch (error) {
    console.error("Error fetching screened patients:", error);
    return [];
  }
}
