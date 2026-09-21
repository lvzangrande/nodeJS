import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req, res)=>{//rota e req -> requesição ~~ res -> resposta
    res.send('<h1>Primeiro servidor</h1>');
});

app.listen(port,()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
});//
