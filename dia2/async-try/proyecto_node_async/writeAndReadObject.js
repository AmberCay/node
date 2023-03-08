const fs = require('fs/promises');

async function writeAndRead(path, obj) {
    try {
        await fs.writeFile(path, JSON.stringify(obj))

        const newObj = await fs.readFile(path, 'utf-8')

        console.log(JSON.parse(newObj));
    } catch (error) {
        console.log(error);
    }
}

// writeAndRead('try.json', {name: 'Amber', cat: 'Rosie'})

module.exports = { writeAndRead }