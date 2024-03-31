function generateUniqueID() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  const randomString = Math.random().toString(36).substr(2, 5); // Generate random string and take a substring
  return timestamp + randomString; // Concatenate timestamp and random string
}

export default generateUniqueID;
