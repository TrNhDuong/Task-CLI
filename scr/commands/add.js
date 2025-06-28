const AddTasksService = require('../service/addTaskService')

class AddTask {
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
    async execute(argv) {
        if (argv.length > 2){
            throw new Error('Command not valid, argument is more than 2 in add task');
        }
        const description = argv[1];
        (async () => {
            await new AddTasksService(this.tasksRepository).execute(description);
        })();
        console.log(
            `Adding successfully new task `
        )
    }
}

module.exports = AddTask;

