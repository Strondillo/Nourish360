export async function fetchCustomUsers() {
    try {
      const response = await fetch("http://127.0.0.1:1337/api/custom-user?populate=*");
      if (!response.ok) {
        throw new Error(`Failed to fetch custom users: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("CustomUsers API Response:", data); // Debug the response structure
  
      return data.data.map((user: any) => ({
        firstName: user.attributes?.First_Name || "N/A",
        lastName: user.attributes?.Last_Name || "N/A",
        email: user.attributes?.Email || "N/A",
        accountType: user.attributes?.AccountType || "Unknown",
        prcId: user.attributes?.prcId || "N/A",
      }));
    } catch (error) {
      console.error("Error fetching CustomUsers:", error);
      return [];
    }
  }
  