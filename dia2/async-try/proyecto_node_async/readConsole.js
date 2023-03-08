const readline = require('readline')

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
};

async function readConsole(callback) {

    let user = {
        name: '',
        surname: '',
        age: 0
    };

    try {
        user.name = await pregunta('What is your name?: ')
        user.surname = await pregunta('What is your surname?: ')
        user.age = await pregunta('What is your age?: ')
        callback(user)
    } catch (error) {
        console.log(error);
    }
};

// readConsole(console.log)

module.exports = { readConsole }