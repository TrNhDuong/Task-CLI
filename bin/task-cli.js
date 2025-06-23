#!/usr/bin/env node

const cmdInput = process.argv.slice(2);

const TaskFactory = require('./../commands/taskFactory');

let typeOfTask = cmdInput[0];

const executionTask = TaskFactory.createTaskClass(typeOfTask);

if (executionTask != null){
    const objectTask = new executionTask();
    objectTask.execute(cmdInput);
} else {
    console.log('Execution task null, invalid command')
}


