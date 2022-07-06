// const express = require('express');
// const mongoose = require('mongoose');
// const env = require('dotenv').config();

// const taskController = require('./controller/taskController');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/task', taskController.createTask);
// app.get('/task/:taskid', taskController.getTask);

// app.listen(process.env.PORT || 3000, () => {
//   console.log('Server started');
// });

// mongoose
//   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {
//     console.log('Mongodb connected...');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

var http = require('http');
var server = http.createServer(function (request, response) {
  response.end('helllo world');

  console.log('do something now');
})

server.listen(80, 'domain');
