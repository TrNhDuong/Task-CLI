const TaskRepository = require('../reporsitory/taskRepository');

class ListTasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(status = 'to-do') {
        const tasks = this.taskRepository.mappedTasks;
        console.log('📋 Tasks:');

        for (let task of tasks) {
            if (task.status === status || status === 'to-do') {
                console.log(`${task.id}. ${task.description} - ${task.status}`);
            }
        }
    }
}

module.exports = ListTasksService;
