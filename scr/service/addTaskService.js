const TaskRepository = require('../reporsitory/taskRepository')
const Task = require('../task/task')
class AddTasksService {
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }
    async execute(description) {
        let id = this.taskRepository.mappedTasks.length + 1;
        const status = 'to-do';
        const timeCreate = new Date().toISOString();
        const updateAt = null;

        const newTask = new Task(id, description, status, timeCreate, updateAt);
        this.taskRepository.create(newTask);
    }
}

module.exports = AddTasksService;