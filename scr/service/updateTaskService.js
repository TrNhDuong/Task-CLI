const TaskRepository = require('../reporsitory/taskRepository')

class UpdateTasksService {
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }
    async execute(id, description ) {
        await this.taskRepository.update(id, description, undefined);
    }
}

module.exports = UpdateTasksService;