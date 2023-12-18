const redis = require('redis');
const client = redis.createClient();

// Example function to set user session data
function setUserSession(userId, username, sessionData) {
  const key = `user:${userId}:session`;
  const value = JSON.stringify({ username, sessionData });

  // Set the key-value pair in Redis
  client.set(key, value, (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`User session for ${username} set successfully.`);
    }
  });
}

// Example function to get user session data
function getUserSession(userId, callback) {
  const key = `user:${userId}:session`;

  // Get the value associated with the key from Redis
  client.get(key, (err, reply) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      const userData = JSON.parse(reply);
      callback(null, userData);
    }
  });
}

// Example usage
const userId = 123;
const username = 'john_doe';
const sessionData = { loggedIn: true, lastLogin: new Date() };

// Set user session data
setUserSession(userId, username, sessionData);

// Get user session data
getUserSession(userId, (err, userData) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`User data retrieved: ${JSON.stringify(userData)}`);
  }
});

// Close the Redis connection (in a real-world scenario, you would typically keep the connection open)
client.quit();
