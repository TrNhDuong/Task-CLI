const ITask = require('./task');
const ProcessTask = require('./../utils/processTask');
const storageData = require('./../storage/storage');

class AddTask extends ITask {
    execute(argv) {
        if (argv.length > 2){
            throw new Error('Command not valid, argument is more than 2 in add task');
        }
        const descriptionTask = argv[1];
        const newTask = ProcessTask.createTask(descriptionTask);
        let taskList = ProcessTask.getTask();
        taskList.push(newTask);
        storageData(taskList);
    }
}

module.exports = AddTask;

