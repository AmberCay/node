const fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

// console.log('Mensaje 1');
// setTimeout(function() {
//     console.log('Mensaje 2');
//     console.log('Mensaje 3');
// }, 3000);

let user = { name: "", surname: "", age: 0 };

rl.question("what is your name?: ", (name) => {
  rl.question("what is your surname?: ", (surname) => {
    rl.question("what is your age?: ", (age) => {
      let newUser = { name, surname, age };
      fs.writeFile("user.json", JSON.stringify(newUser), (err) => {
        if (err) throw err;
        console.log("the file has been saved");
        fs.readFile("user.json", (err, data) => {
          if (err) throw err;
          let newUser = JSON.parse(data);
          console.log(newUser);
        });
      });
    });
  });
});
