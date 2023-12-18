const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

// Example: Set a key-value pair
client.set('myKey', 'overview-9', (err, reply) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Key set successfully:', reply);
  }

  client.quit();
});

