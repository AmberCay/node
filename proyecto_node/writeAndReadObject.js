const fs = require('fs');

function writeAndRead (path, obj) {
    fs.writeFile(path, JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('the file has been saved')
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            console.log(JSON.parse(data)); 
        })
    })
}

module.exports = { writeAndRead }