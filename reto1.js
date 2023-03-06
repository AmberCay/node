import { writeFile, readFile } from 'fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// console.log('Mensaje 1');
// setTimeout(function() {
//     console.log('Mensaje 2');
//     console.log('Mensaje 3');
// }, 3000);

let user = {name: '',
            surname: '',
            age: ''};

const rl = readline.createInterface({ input, output });

user.name = await rl.question('What is your name?: ');
user.surname = await rl.question('What is your surname?: ');
user.age = await rl.question('What is your age?: ');

writeFile('user.json', JSON.stringify(user), (err) => {
    if (err) throw err;
    console.log('the file has been saved')
    readFile('user.json', (err, data) => {
    if (err) throw err;
    let newUser = JSON.parse(data);
    console.log(newUser);
});
});

