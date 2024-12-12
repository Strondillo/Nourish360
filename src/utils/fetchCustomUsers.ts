export async function fetchRNDAccounts(): Promise<any[]> {
  try {
    const response = await fetch("http://127.0.0.1:1337/api/custom-user?populate=*");
    if (!response.ok) {
      throw new Error(`Failed to fetch RND users: ${response.statusText}`);
    }

    const { data } = await response.json(); // Extract data from response
    console.log("CustomUsers API Response:", data); // Debug the data structure

    // Map the data to extract RND users
    return data
      .filter((user: any) => user.AccountType === "RND")
      .map((user: any) => ({
        name: `${user.First_Name || "Unknown"} ${user.Last_Name || "Unknown"}`,
        specialty: "Registered Nutritionist-Dietitian (RND)",
        qualifications: "Registered Nutritionist-Dietitian (RND)",
        timings: "Available timings not specified",
        image: "/Profiles/defaultimg.jpg", // Default profile image
        available: true, // Assume all RND users are available
      }));
  } catch (error) {
    console.error("Error fetching RND accounts:", error);
    return [];
  }
}
