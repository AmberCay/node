const express = require('express');
const app =  express();

app.get('/', function(req, res) {
    res.send('Peticion recibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.send({ok: true, code: 200, message: 'Recibido!'});
});

app.use('/bye', function(req, res) {
    res.send({ok: true, code: 200, message: 'Adios!'})
})

app.listen(3000);