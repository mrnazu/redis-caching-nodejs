const retrievedToken = await client.get(key);
const timeToLive = await client.ttl(key);

if (retrievedToken === userProvidedToken && timeToLive > 0) {
  // Token is valid and hasn't expired
  // Allow the user to reset the password
} else {
  // Token is either invalid or expired
  // Prompt the user to request a new password reset
}

