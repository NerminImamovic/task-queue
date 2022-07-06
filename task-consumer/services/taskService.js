/* eslint-disable class-methods-use-this */
const Task = require('../models/task');

class TaskService {
  async updateTask(id, status) {
    try {
      await Task.updateOne({ id }, { status });
      console.log(`status updated of task id: ${id} and with status: ${status}`);
    } catch (err) {
      console.log(`Error updating status of task :${err}`);
    }
  }
}

exports.TaskService = TaskService;
