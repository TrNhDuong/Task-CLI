const DataSource = require('../storage/storage');
const Task = require('../task/task');

class TaskRepository {
    constructor(database, mappedTasks){
        this.database = database;
        this.mappedTasks = mappedTasks;
    }

    static async build(fileName){
        const database = new DataSource(fileName);
        const tasks = await database.getTaskData();
        if (!tasks){
            throw new Error('taskRepository.js error: get tasks from databsae failed');
        }

        const mappedTasks = tasks.map((task, index) => {
            return {
                ...task,
                id: index + 1
            }
        })
        return new TaskRepository(database, mappedTasks);
    }

    async create(newTask){
        if (!newTask){
            throw new Error(`taskRepository.js error: newTask mustn't undefined value`);
        }
        if (typeof newTask === 'Task'){
            newTask = newTask.toObject();
        }
        this.mappedTasks.push(newTask);
    }

    async read(id){
        if (!id){
            throw new Error('taskRepository.js error: Id is invalid');
        }
        if (id < 0 || id > this.mappedTasks.length){
            throw new Error('taskRepository.js: id out of range');
        }
        let index = id - 1;
        return this.mappedTasks[index];
    }

    async update(id, description, status){
        if (!id){
            throw new Error('taskRepository.js: id must valid value');
        }
        let index = id - 1;
        if (status != undefined)
            this.mappedTasks[index].status = status;
        if (description != undefined){
            this.mappedTasks[index].description = description;
            this.mappedTasks[index].updateAt = new Date().toISOString();
        }
    }

    async delete(id){
        if (!id){
            throw new Error('taskRepository.js delete: id must valid value');
        }
        if (id < 0 || id > this.mappedTasks.length){
            throw new Error('taskRepository.js delete: id out of range');
        }
        let index = id - 1;
        this.mappedTasks.splice(index, 1);
    }
}

module.exports = TaskRepository;