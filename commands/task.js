class ITask {
    execute(argv) {
        throw new Error('execute method must be implemented by subclass');
    }
}

module.exports = ITask;