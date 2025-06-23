const ITask = require('./task');
const AddTask = require('./add');
const ListTask = require('./list');

class TaskFactory {
    static createTaskClass(type){
        if ('add' == type){
            return AddTask;
        } else if ('list' == type){
            return ListTask;
        }
        return null;
    }
}

module.exports = TaskFactory;