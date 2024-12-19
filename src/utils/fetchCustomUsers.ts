export async function fetchCustomUsers(accountType?: string): Promise<any[]> {
  try {
    const response = await fetch("http://127.0.0.1:1337/api/custom-user?populate=*");
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const { data } = await response.json();
    console.log("CustomUsers API Response:", data);

    return data
      .filter((user: any) => (accountType ? user.AccountType === accountType : true))
      .map((user: any) => ({
        name: `${user.First_Name || "Unknown"} ${user.Last_Name || "Unknown"}`,
        email: user.Email || "No Email",
        specialty: user.AccountType || "Unknown",
      }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
