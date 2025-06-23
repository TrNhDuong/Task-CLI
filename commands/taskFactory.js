const ITask = require('./task');
const AddTask = require('./add');
const ListTask = require('./list');
const DeleteTask = require('./delete');

class TaskFactory {
    static createTaskClass(type){
        if ('add' == type){
            return AddTask;
        } else if ('list' == type){
            return ListTask;
        } else if ('delete' == type){
            return DeleteTask;
        }
        return null;
    }
}

module.exports = TaskFactory;