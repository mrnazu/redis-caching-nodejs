[Redis cheatsheet](https://quickref.me/redis.html)

### APPEND key value
```redis
redis> EXISTS mykey
(integer) 0
redis> APPEND mykey "Hello"
(integer) 5
redis> APPEND mykey " World"
(integer) 11
redis> GET mykey
"Hello World"
```
The `EXISTS` command is used to check whether a key exists in the database or not. The command takes one or more keys as arguments and returns an integer value:
- `1` if the key exists.
- `0` if the key does not exist.

![image](https://github.com/mrnazu/redis-caching-nodejs/assets/108541991/69aee35f-b048-46ad-ba71-ef1a8c7537fd)

And The `APPEND` command is used to append a value to an existing key's value. If the key does not exist, a new key is created, and the value is set. The APPEND command is specifically designed for string values.

![image](https://github.com/mrnazu/redis-caching-nodejs/assets/108541991/f31313a8-15de-4841-8d9f-0b52923f29ec)

### BITCOUNT key [start end]
```redis
redis> SET mykey "foobar"
"OK"
redis> BITCOUNT mykey
(integer) 26
redis> BITCOUNT mykey 0 0
(integer) 4
redis> BITCOUNT mykey 1 1
(integer) 6
```
In the given example, a Redis key named "mykey" is set to the string value "foobar." Subsequently, the `BITCOUNT` command is used to count the number of set bits (bits with a value of 1) in the binary representation of the value associated with "mykey." The `BITCOUNT` command allows you to count bits in the whole value or within a specified range.

Let's break down each part of the example:

1. **Setting the Key:**

   ```bash
   redis> SET mykey "foobar"
   "OK"
   ```

   This sets the value of the key "mykey" to the string "foobar" and returns "OK" to indicate that the operation was successful.

2. **Using BITCOUNT on the Entire Value:**

   ```bash
   redis> BITCOUNT mykey
   (integer) 26
   ```

   The `BITCOUNT` command without a range counts all the set bits in the binary representation of the value associated with "mykey." In this case, the binary representation of "foobar" contains 26 set bits.

3. **Using BITCOUNT within a Specific Range:**

   ```bash
   redis> BITCOUNT mykey 0 0
   (integer) 4
   ```

   Here, the `BITCOUNT` command is used with a range specified as 0 to 0. This counts the set bits in the first bit of the binary representation, resulting in 4 set bits.

   ```bash
   redis> BITCOUNT mykey 1 1
   (integer) 6
   ```

   Similarly, this `BITCOUNT` command is used with a range specified as 1 to 1, counting the set bits in the second bit of the binary representation, resulting in 6 set bits.

In summary, the `BITCOUNT` command in this context is used to analyze the binary representation of the string value "foobar" and count the number of set bits in the entire value or within specific ranges. This can be useful for various applications such as bit-level manipulations or counting specific patterns in binary data.
