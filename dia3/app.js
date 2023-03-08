const express = require('express');
const app =  express();

app.get('/', function(req, res) {
    console.log('Peticion recibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).json({ok:true, message:"Recibido!"});
});

app.use('/bye', function(req, res) {
    res.status(200).json({ok: true, code: 200, message: 'Adios!'});
})

app.listen(3000);