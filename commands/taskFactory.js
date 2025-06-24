const ITask = require('./task');
const AddTask = require('./add');
const ListTask = require('./list');
const DeleteTask = require('./delete');
const UpdateTask = require('./update');
const MarkTask = require('./mark')

class TaskFactory {
    static createTaskClass(type){
        if ('add' === type){
            return AddTask;
        } else if ('list' === type){
            return ListTask;
        } else if ('delete' === type){
            return DeleteTask;
        } else if ('update' === type){
            return UpdateTask;
        } else if (type.includes('mark')){
            return MarkTask;
        }
        return null;
    }
}

module.exports = TaskFactory;