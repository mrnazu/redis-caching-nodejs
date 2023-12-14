# Redis: Hello World!

Before we dive into Redis, make sure you have it installed on your system. You can download and install Redis from the [official website](https://redis.io/download) or here: [Install Redis on Debian/Linux](https://github.com/mrnazu/redis-caching-nodejs/blob/main/overview/overview-3.1-install-redis.md). Once installed, you can start the Redis server using the following command:

```bash
redis-server
```

This command launches the Redis server, making it ready to accept client connections.

Now that your Redis server is up and running, let's interact with it using the Redis Command Line Interface (CLI). Open a new terminal and use the following command:

```bash
redis-cli
```
This will open the Redis CLI, allowing you to execute various commands and interact with the Redis server.

## Your First Redis Commands: SET and GET

The foundation of Redis revolves around key-value pairs. The `SET` command is used to set a key with a specified value, and the `GET` command retrieves the value associated with a given key.

```bash
SET mykey "Hello, Redis!"
GET mykey
```

Try these `commands` in the Redis CLI and see how you can store and retrieve values.


Remember, In the context of Redis, the operations you perform are typically referred to as `commands`. Redis has a set of commands that you can use to interact with the data store. Each command is a specific operation that you can execute on the Redis server to perform actions like `setting a value`, `retrieving a value`, `working with lists or sets`, and more...

So, when we I "Redis commands," I mean the set of actions or operations that you can perform using the Redis Command Line Interface (CLI) or programmatically through the Redis API. Each command usually consists of a keyword followed by arguments that define the specifics of the operation.


## Strings, Lists, and Sets

Redis supports various data types, including strings, lists, sets and so on... Explore the following commands to manipulate these data types:

- Strings: `SET`, `GET`
- Lists: `LPUSH`, `RPUSH`, `LRANGE`
- Sets: `SADD`, `SMEMBERS`


### Strings:

- **SET:** The `SET` command is used to set a key with a specific string value. For example:
  ```bash
  SET mykey "Hello, Redis!"
  ```
  This sets the value of the key "mykey" to the string "Hello, Redis!".

- **GET:** The `GET` command is used to retrieve the value stored at a specific key. For example:
  ```bash
  GET mykey
  ```
  This retrieves the value of the key "mykey."

### Lists:

- **LPUSH:** The `LPUSH` command is used to insert one or multiple values at the beginning of a list. For example:
  ```bash
  LPUSH mylist "World"
  ```
  This inserts the value "World" at the beginning of the list stored at the key "mylist."

- **RPUSH:** The `RPUSH` command is used to insert one or multiple values at the end of a list. For example:
  ```bash
  RPUSH mylist "Hello"
  ```
  This inserts the value "Hello" at the end of the list stored at the key "mylist."

- **LRANGE:** The `LRANGE` command is used to retrieve a range of elements from a list. For example:
  ```bash
  LRANGE mylist 0 -1
  ```
  This retrieves all elements from the list stored at the key "mylist."

### Sets:

- **SADD:** The `SADD` command is used to add one or more members to a set. For example:
  ```bash
  SADD myset "apple"
  ```
  This adds the member "apple" to the set stored at the key "myset."

- **SMEMBERS:** The `SMEMBERS` command is used to retrieve all members of a set. For example:
  ```bash
  SMEMBERS myset
  ```
  This retrieves all members of the set stored at the key "myset."

These commands are fundamental for working with strings, lists, and sets in Redis. They allow you to perform actions such as setting and retrieving values, manipulating lists, and managing sets of unique elements.
