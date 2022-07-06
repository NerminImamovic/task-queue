/* eslint-disable class-methods-use-this */
const Task = require('../models/task');

class TaskService {
  async createTask(query) {
    console.log('adjeee');

    const task = new Task();
    task.id = 'aaa';
    task.query = query;
    task.result = 0;
    task.status = 'WAITING';

    try {
      const created = await task.save();

      console.log(`created ${JSON.stringify(created)}`);
    } catch (ee) {
      console.log(`eee ${JSON.stringify(ee)}`);
    }

    return task;
  }

  async getTask(id) {
    return Task.findById(id);
  }
}

exports.TaskService = TaskService;
