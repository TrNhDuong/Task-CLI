function storageData(tasks){
    const fs = require('fs');
    const taskString = JSON.stringify(tasks, null, 2);
    fs.writeFileSync('task.json', taskString, 'utf-8');
}

module.exports = storageData;