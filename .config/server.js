import express from 'express';
console.log("Iniciando configurações do servidor...");
const app = express();
// tod amaquina quando eu subo um servidor nela, ela responde por um servidor loopBack(Localhost)
//ou seja localHost: 3000
const port = process.env.port || 3000;

// seta que o motor de views sera o ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public'));

app.listen(port, () => {
    console.log("***Servidor WEB rodando na porta ", port)
});

export default app;