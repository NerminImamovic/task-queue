const amqp = require('amqplib/callback_api');

const { performTask } = require('../lib');

const receiveMessage = () => new Promise((resolve, reject) => {
  amqp.connect(process.env.RABBITMQ_URL, (error, connection) => {
    if (error) {
      reject(error);
    }

    connection.createChannel((err, channel) => {
      if (err) {
        reject(err);
      }
      const queue = process.env.QUEUE_NAME;

      channel.assertQueue(queue, {
        durable: true,
      });
      channel.prefetch(1);
      console.log(
        `Waiting for message in${
          queue}`,
      );
      channel.consume(
        queue,
        async (msg) => {
          console.log(`Message received in worker ${process.pid} with message ${msg.content.toString()}`);
          resolve(msg);
          await performTask(msg.content.toString());
        },
        {
          noAck: false,
        },
      );
    });
  });
});

exports.startReceiving = async () => {
  await receiveMessage();
};
