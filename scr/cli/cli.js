const makeTaskRepository = require('../reporsitory/makeTaskRepository');

const TaskFactory = require('../commands/taskFactory');

async function cli() {
    const cmdInput = process.argv.slice(2);
    const taskRepository = await makeTaskRepository('task.json');
    let typeOfTask = cmdInput[0];

    const executionTask = TaskFactory.createTaskClass(typeOfTask);

    if (executionTask != null){
        const objectTask = new executionTask(taskRepository);
        await objectTask.execute(cmdInput);
    } else {
        console.log('Execution task null, invalid command')
    }
    await taskRepository.database.writeTaskData(taskRepository.mappedTasks);
    //taskRepository.database.writeTaskData(taskRepository.mappedTasks);
}

module.exports = cli;