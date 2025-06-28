const TaskRepository = require('../reporsitory/taskRepository')

class MarkTasksService {
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }
    async execute(id, status ) {
        await this.taskRepository.update(id, undefined , status);
    }
}

module.exports = MarkTasksService;