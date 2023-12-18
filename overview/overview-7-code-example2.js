const token = generateUniqueToken(); // Function to generate a unique token
const userId = 123; // User ID associated with the password reset
const key = `password_reset:${userId}`;
const expirationTime = 60 * 60; // Expiration time in seconds (e.g., 60 minutes)

client.set(key, token, 'EX', expirationTime);

