# Task Queue

Task queue system using Node.js in cluster mode, RabbitMQ, MongoDB and Docker.

![image](https://user-images.githubusercontent.com/13281933/177577570-048e6d2a-5af6-416d-b082-187c2795fbf2.png)

- Simple asynchronous communication between provider and consumers using RabbitMQ or any other service using AMQP protocol, such as AWS MQ.
- Using MongoDB to track tasks and their statuses.

### Start for development 

Create `.env` files in `task-producer` and `task-consumer` folders (copy env.examples) file.

1) If you have installed MongoDB and RabbitMQ on your machine update values in `.env` files.

2) Start `docker-compose up -f docker-compose.local.yml -d`, and run `npm start` in `task-producer` and `task-consumer` folders.

### Start using docker:

`docker-compose up -d`
