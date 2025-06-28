const MarkTasksService = require('../service/markTaskService')

class MarkTask {
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
    async execute(argv){
        console.log(argv);
        if (argv.length != 2){
            throw new Error('Command error: Mark task argument not valid');
        }
        const mark = argv[0];

        let newStatus;
        if (mark.includes('done')){
            newStatus = 'done';
        } else if (mark.includes('in-progress')){
            newStatus = 'in-progress';
        } else {
            throw new Error('Command error: Mark argument not valid')
        }
        const idOfUpdateTask = argv[1];
        new MarkTasksService(this.tasksRepository).execute(idOfUpdateTask, newStatus);
    }
}


module.exports = MarkTask;

