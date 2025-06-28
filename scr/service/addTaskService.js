const TaskRepository = require('../reporsitory/taskRepository')

class AddTasksService {
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }
    async execute(description) {
        let id = this.taskRepository.mappedTasks.length + 1;
        const newTask = await this.taskRepository.create(id, description);
        this.taskRepository.mappedTasks.push(newTask.toObject());
    }
}

module.exports = AddTasksService;