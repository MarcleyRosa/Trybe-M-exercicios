const fs = require('fs').promises;

async function person() {
    try {
        const data = await fs.readFile('./simpsons.json', 'utf-8');
        const response = JSON.parse(data);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    person
}