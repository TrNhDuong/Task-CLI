const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');

class ListTask extends ITask {
    execute(argv){
        let conditionOfList;

        if (argv.length > 2){
            throw new Error('Command error: List task not valid');
        } else if (argv.length == 2){
            conditionOfList = argv[1];
            if (conditionOfList != 'to-do' && conditionOfList != 'done' && conditionOfList != 'in-progress'){
                throw new Error('Command error: third argument of List task not valid');
            }
        } else if (argv.length == 1){
            conditionOfList = '';
        }

        const filterTask = (tasks, condition) => {
            if (condition === '') {
                return tasks;
            }
            return tasks.filter(currentTask => currentTask.status === condition);
        }

        const tasks = ProcessTask.getTask();
        let validTasks = filterTask(tasks, conditionOfList);
        validTasks.forEach(task => console.log(task.id + ' ' + task.description + ' status: ' + task.status));
    }
}

module.exports = ListTask;

