import tabela2024 from "./tabela.js";
import express from 'express';

const app = express(); //Me retorna dados dentro da variável app

app.listen(300, () => console.log('Servidor rodando com sucesso'));

/*
Listen passa à variável "app" o dever de "ouvir" as requisições obtidas na porta especificada (300 como diz no exemplo)

Ali foi usado uma arrow-function, que serve para compactar a maneira que você digita o código, abaixo deixarei como ficaria o código sem a arrow function


function ouvir(app){
        app.listen(300, function(){
        console.log('Servidor rodando com sucesso')
    });
}
ouvir(app);


*/

app.get('/', (requisicao, resposta) => {
    resposta.send(tabela2024)
})

/*
Uso do GET, indicando que eu quero que na página '/' (principal) eu tenha uma resposta (resposta.send) da minha tabela 2024

*/