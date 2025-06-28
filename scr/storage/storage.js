const fs = require('fs').promises;
const path = require('path');
const { constants } = require('fs');

class DataSource {
    constructor(fileName) {
        if (!fileName) {
            throw new Error('Initialize database must combine with fileName');
        }
        this.filePath = path.join(__dirname, '..', 'data/', fileName);
    }

    async getTaskData() {
        try {
            await fs.access(this.filePath, constants.F_OK);
        } catch (err) {
            throw new Error('FilePath does not exist');
        }

        try {
            const content = await fs.readFile(this.filePath, 'utf-8');
            return content ? JSON.parse(content) : [];
        } catch (err) {
            throw new Error(`${this.filePath} contains invalid JSON`);
        }
    }

    async writeTaskData(content) {
        if (typeof content === 'undefined') {
            throw new Error('Cannot write file with undefined content');
        }
        await fs.writeFile(this.filePath, JSON.stringify(content, null, 2), 'utf-8');
    }

    async clearFile() {
        await this.writeTaskData([]);
    }
}

module.exports = DataSource;
