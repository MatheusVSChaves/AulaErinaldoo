const express = require ('express');
const app = express ();

const db = require ('./models/db')


app.get('/', function (req,res){
    res.send("lista de bombas ");
});

app.listen (8080, function (){
    console.log( 'Servidor foi Inicializado:http://locahost;8080');
} );
