# Install Redis on Debian/Linux

## Prerequisites

If you're running a very minimal distribution (such as a Docker container), you may need to install `lsb-release`, `curl`, and `gpg` first:

```bash
sudo apt install lsb-release curl gpg
```

## Add the Redis Repository

Add the official Redis repository to the APT index, update it, and then install:

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
```

## Install Redis

Now install Redis:

```bash
sudo apt-get install redis
```

## Start and Test Redis

After installation, Redis should start automatically. You can check the status of the Redis service with:

```bash
sudo systemctl status redis
```

If it's not running, you can start it with:

```bash
sudo systemctl start redis
```

To test if Redis is working, connect to the Redis server using the Redis CLI before that start `redis-server`:

```bash
redis-cli
```

This will open the Redis command-line interface. You can test basic commands such as:

```bash
set mykey "Hello, Redis!"
get mykey
```
![redis-servr](https://github.com/mrnazu/redis-caching-nodejs/assets/108541991/b84a756a-c910-443c-8bcb-e1829b141ad1)

You should see the output "Hello, Redis!" after running the `get mykey` command.

That's it! You've successfully installed and tested Redis on Debian/Linux using the official Redis repository.
