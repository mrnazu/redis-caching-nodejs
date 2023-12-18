const redis = require('redis');
const client = redis.createClient();

// Set a key with an expiration time
client.set('mykey', 'Hello, this key will expire!', 'EX', 60);

// Check the remaining time to live (TTL) for the key
client.ttl('mykey', (err, ttl) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Time to live for mykey: ${ttl} seconds`);
  }
});

// Close the Redis connection (in a real-world scenario, you would typically keep the connection open)
client.quit();

