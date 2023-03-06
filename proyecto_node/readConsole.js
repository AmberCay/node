var readline = require('readline');

var rl = readline.createInterface(
	process.stdin, process.stdout);



function readConsole(callback) {

    let user = {
        fName: '',
        surname: '',
        age: 0
    };

    rl.question('What is your name?: ', (fName) => {
        user.fName = fName;
        rl.question('What is your surname?: ', (surname) => {
            user.surname = surname;
            rl.question('What is your age?: ', (age) => {
                rl.close();
                user.age = age;
                callback(user);
            })
        })
    });
};


readConsole(console.log);
// exports.readConsole = readConsole
module.exports = { readConsole };