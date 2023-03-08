const fs = require('fs/promises');
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
}



async function asyncAwait() {

    let user = {
        name: '',
        surname: '',
        age: 0
    };

    try {
        user.name = await pregunta('What is your name?: ')
        user.surname = await pregunta('What is your surname?: ')
        user.age = await pregunta('What is your age?: ')

        await fs.writeFile('user.json', JSON.stringify(user))

        const newUser = await fs.readFile('user.json', 'utf-8')

        console.log(newUser);
    } catch (error) {
        console.log(error);
    }

    // console.log(user);
}

asyncAwait()