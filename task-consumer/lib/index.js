const { TaskService } = require('../services/taskService');

const taskService = new TaskService();

exports.performTask = async (message) => {
  const jsonMessage = JSON.parse(message);
  await taskService.updateTask(jsonMessage.id, 'INPROGRESS');
  console.log('Start updating task');

  await taskService.updateTask(jsonMessage.id, 'COMPLETED');
  console.log('Update finished');
};
