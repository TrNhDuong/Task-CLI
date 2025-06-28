const DeleteTasksService = require('../service/deleteTaskService')

class DeleteTask {
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
    async execute(argv){
        if (argv.length > 2){
            throw new Error('Command error: argument of deleteCommand not valid');
        }
        const idOfDeleteTask = argv[1];
        (async () => {
            await new DeleteTasksService(this.tasksRepository).execute(idOfDeleteTask);
        })();
    }
}

module.exports = DeleteTask;