const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');
const storageData = require('./../storage/storage');

class DeleteTask extends ITask {
    execute(argv){
        if (argv.length > 2){
            throw new Error('Command error: argument of deleteCommand not valid');
        }
        const tasks = ProcessTask.getTask();
        const idOfDeleteTask = argv[1];


        let filterTasks = tasks.filter(currentTask => currentTask.id != idOfDeleteTask   );

        storageData(filterTasks);
    }
}

module.exports = DeleteTask;