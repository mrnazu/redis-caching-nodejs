<h1 align="center">Redis Caching with Node.js</h1>

![image](https://github.com/mrnazu/redis-caching-nodejs/assets/108541991/8cce383a-17da-4392-942f-2059b15b8b66)

This repository contains code and materials for learning Redis caching concepts with Node.js. The learning journey is structured based on a set of cool materials covering an overview of Redis, miscellaneous concepts, and practical projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Structure](#structure)
3. [Contents](#contents)
4. [Getting Started](#getting-started)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

Redis is an in-memory data store that is commonly used as a caching mechanism to improve the performance of web applications. This learning journey provides hands-on experience using Redis for caching with Node.js.

## Structure

The journey begins with an overview of Redis, followed by miscellaneous concepts and two practical projects.

1. [Overview](#overview)
2. [Miscellaneous Concepts](#miscellaneous-concepts)
3. [Project 1 - Caching Strategies](#project-1-caching-strategies)
4. [Project 2 - Rate Limiting with Redis](#project-2-rate-limiting-with-redis)

## Contents

### Overview

- [Intro to the Course](overview/overview-1-intro-to-course.md)
- [Intro to Redis](overview/overview-2-intro-to-redis)
- [Why Redis?](overview/overview-3-why-redis)
- [Hello World](overview/overview-4-hello-world)
- [Common Operations](overview/overview-5-common-operations)
- [Redis Keyname Convention](overview/overview-6-redis-keyname-convention)
- [Expiring Keys](overview/overview-7-expiring-keys)
- [How Expiring Keys Work](overview/overview-8-how-expiring-keys-work)
- [Connecting with Node](overview/overview-9-connecting-with-node)

### Miscellaneous Concepts

- [Atomicity and Single Thread](misc/misc-1-atomicity-and-single-thread)
- [Key Patterns](misc/misc-2-key-patterns)
- [List Intro](misc/misc-3-list-intro)
- [More on Lists](misc/misc-4-more-on-lists)
- [Sets](misc/misc-5-sets)
- [Transactions](misc/misc-6-transactions)

### Project 1 - Caching Strategies

- [Introduction and Redis Setup](proj1/proj1-1-introduction-and-redis-setup)
- [Invalidating Cache](proj1/proj1-2-invalidating-cache)
- [Background Data Refresh](proj1/proj1-3-background-data-refresh)

### Project 2 - Rate Limiting with Redis

- [Introduction](proj2/proj2-1-introduction)
- [Rate Limit by IP](proj2/proj2-2-rate-limit-by-ip)
- [TTL](proj2/proj2-3-ttl)
- [Rate Limiting Middleware](proj2/proj2-4-rate-limiting-middleware)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mrnazu/redis-caching-nodejs.git
   ```

2. Install dependencies:

   ```bash
   cd redis-caching-nodejs
   npm install
   ```

3. Run the Node.js server:

   ```bash
   node app.js
   ```

## Contributing

Feel free to contribute by opening issues, providing suggestions, or submitting pull requests. Your contributions are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
