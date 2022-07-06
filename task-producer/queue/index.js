const amqp = require('amqplib/callback_api');

const sendMessage = (message) => new Promise((resolve, reject) => {
  amqp.connect(process.env.RABBITMQ_URL, (error, connection) => {
    if (error) {
      reject(error);
    }

    connection.createChannel((err, channel) => {
      if (err) {
        reject(err);
      }

      const queue = process.env.QUEUE_NAME;

      channel.assertQueue(queue, { durable: true });
      channel.sendToQueue(queue, Buffer.from(message), { persistent: true });

      console.log(`Message sent: ${message}`);
      resolve(message);
    });

    setTimeout(() => {
      connection.close();
    }, 500);
  });
});

exports.produceMessage = async (message) => {
  await sendMessage(message);
};
