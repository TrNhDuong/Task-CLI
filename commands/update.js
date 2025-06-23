const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');

class UpdateTask extends ITask {
    execute(argv){
        let conditionOfList;
        if (argv.length != 3){
            throw new Error('Command error: Update task argument not valid');
        }
        const tasks = ProcessTask.getTask();
        let validTasks = filterTask(tasks, conditionOfList);
        validTasks.forEach(task => console.log(task.description));
    }
}


module.exports = ListTask;

