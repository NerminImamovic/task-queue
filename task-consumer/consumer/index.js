/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const cluster = require('cluster');
require('dotenv').config();

const CPU_CORE = 2;

const queue = require('../queue');

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Mongodb connected...');
  })
  .catch((err) => {
    console.log(err);
  });

if (cluster.isMaster) {
  console.log(`Master is up PID: ${process.pid}`);

  for (let i = 0; i < CPU_CORE; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker is up PID: ${process.pid}`);
  queue.startReceiving();
}
