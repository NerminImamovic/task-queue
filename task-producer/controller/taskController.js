const { TaskService } = require('../services/taskService');
const { produceMessage } = require('../queue');

const taskService = new TaskService();

// eslint-disable-next-line consistent-return
exports.createTask = async (req, res) => {
  const query = req.body.number;

  try {
    console.log('ovvdjee');

    const task = await taskService.createTask(query);

    console.log(`Task ${JSON.stringify(task)}`);

    await produceMessage(JSON.stringify({ id: task.id, query, result: 0 }));

    console.log('AAA');

    return res.json({ message: 'Job submitted' });
  } catch (err) {
    res.status(500);
  }
};

exports.getTask = async (req, res) => {
  const { taskid } = req.params;

  try {
    const task = await taskService.getTask(taskid);

    return res.json(task);
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};
