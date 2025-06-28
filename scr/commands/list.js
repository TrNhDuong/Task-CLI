const ListTasksService = require('../service/listTaskService')

class ListTask{
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
    async execute(argv){
        let conditionOfList;
        if (argv.length > 2){
            throw new Error('Command error: List task not valid');
        } else if (argv.length == 2){
            conditionOfList = argv[1];
            console.log(conditionOfList);
            if (conditionOfList != 'to-do' && conditionOfList != 'done' && conditionOfList != 'in-progress'){
                throw new Error('Command error: third argument of List task not valid');
            }
        } else if (argv.length == 1){
            conditionOfList = 'to-do';
        }
        ( async () => {
            await new ListTasksService(this.tasksRepository).execute(conditionOfList);
        })();
    }
}

module.exports = ListTask;

