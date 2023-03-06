var readline = require('readline');

var rl = readline.createInterface(
	process.stdin, process.stdout);

let user = {
    fName: '',
    surname: '',
    age: 0
};

function readConsole(callback) {

    rl.question('What is your name?: ', (fName) => {
        user.fName = fName;
        rl.question('What is your surname?: ', (surname) => {
            user.surname = surname;
            rl.question('What is your age?: ', (age) => {
                user.age = age;
                return callback(user);
            })
        })
    });
};


// readConsole(console.log);
// exports.readConsole = readConsole
module.exports = { readConsole };