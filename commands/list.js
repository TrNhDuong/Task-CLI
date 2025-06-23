const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');

class ListTask extends ITask {
    static execute(argv){
        if (argv.length > 3){
            throw new Error('Command not valid');
        }
        const tasks = ProcessTask.getTask();
        tasks.forEach(task => console.log(task.description));
    }
}

module.exports = ListTask;

