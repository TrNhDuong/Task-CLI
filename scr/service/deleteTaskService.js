const TaskRepository = require('../reporsitory/taskRepository')

class DeleteTasksService {
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }
    async execute(id) {
        await this.taskRepository.delete(id);
    }
}

module.exports = DeleteTasksService;