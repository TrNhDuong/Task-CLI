const fs = require('fs');

class ProcessTask {
    static getTask() {
        let tasks = fs.readFileSync('./task.json', 'utf-8');
        if (!tasks.trim()){
            return [];
        }
        tasks = JSON.parse(tasks);
        return tasks;
    }

    static createTask(description){
        let newTask = {};
        newTask.id = 1;
        newTask.description = description;
        newTask.status = 'to-do';
        newTask.createdAt = new Date().toISOString();
        newTask.updateAt = null;
        return newTask;
    }
}

module.exports = ProcessTask;
