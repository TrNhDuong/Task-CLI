const TaskRepository = require('./taskRepository');

async function makeTaskRepository(fileName) {
    const file = fileName || 'task.json';
    const taskRepo = await TaskRepository.build(file);
    return taskRepo;
}

module.exports = makeTaskRepository;