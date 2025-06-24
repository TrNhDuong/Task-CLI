const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');
const storageData = require('../storage/storage');

class UpdateTask extends ITask {
    execute(argv){
        console.log(argv);
        if (argv.length != 3){
            throw new Error('Command error: Update task argument not valid');
        }
        const tasks = ProcessTask.getTask();
        const newDescription = argv[2];
        const idOfUpdateTask = argv[1];

        for (let task of tasks){
            if (task.id == idOfUpdateTask){
                task.description = newDescription;
                task.updateAt = new Date().toISOString();
                break;
            }
        }
        storageData(tasks);
    }
}


module.exports = UpdateTask;

