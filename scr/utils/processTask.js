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
    
    static createTask(description, tasks){
        const getValidId = (tasks) => {
            let idArray = tasks.map(currentTask => currentTask.id);
            let id = 1;
            while (idArray.includes(id)){
                id++;
            }
            console.log(id);
            return id;
        }
        let newTask = {};
        newTask.id = getValidId(tasks);
        newTask.description = description;
        newTask.status = 'to-do';
        newTask.createdAt = new Date().toISOString();
        newTask.updateAt = null;
        return newTask;
    }
}

module.exports = ProcessTask;
