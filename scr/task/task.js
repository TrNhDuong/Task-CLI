class Task {
    constructor(id, description, status, time, updateAt){
        this.id = id,
        this.description = description;
        this.status = status;
        this.time = time;
        this.updateAt = updateAt;
    }
    toObject() {
        return {
        id: this.id,
        description: this.description,
        status: this.status,
        time: this.time,
        updateAt: this.updateAt
        };
    }
}

module.exports = Task;