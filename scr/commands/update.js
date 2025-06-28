const UpdateTasksService = require('../service/updateTaskService')

class UpdateTask {
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
    async execute(argv){
        console.log(argv);
        if (argv.length != 3){
            throw new Error('Command error: Update task argument not valid');
        }
        
        const newDescription = argv[2];
        const idOfUpdateTask = argv[1];
        (async () => {
            await new UpdateTasksService(this.tasksRepository).execute(idOfUpdateTask, newDescription);
        })();
    }
}


module.exports = UpdateTask;

