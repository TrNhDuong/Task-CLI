const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');
const storageData = require('../storage/storage');

class MarkTask extends ITask {
    execute(argv){
        console.log(argv);
        if (argv.length != 2){
            throw new Error('Command error: Mark task argument not valid');
        }
        const tasks = ProcessTask.getTask();
        const mark = argv[0];
        const idOfUpdateTask = argv[1];

        let newStatus;
        if (mark.includes('done')){
            newStatus = 'done';
        } else if (mark.includes('in-progress')){
            newStatus = 'in-progress';
        } else {
            throw new Error('Command error: Mark argument not valid')
        }

        for (let task of tasks){
            if (task.id == idOfUpdateTask){
                task.status = newStatus;
                task.updateAt = new Date().toISOString();
                break;
            }
        }
        storageData(tasks);
    }
}


module.exports = MarkTask;

