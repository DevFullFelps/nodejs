import tabela2024 from "./tabela.js";
import express from 'express';

const app = express(); //Me retorna dados dentro da variável app

app.use(express.json()); //Receba os dados e trate como 'JSON'

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
    resposta.status(200).send(tabela2024)
})

/*
Uso do GET, indicando que eu quero que na página '/' (principal) eu pegue uma resposta (resposta.send) da minha tabela 2024

GET - Pegar
POST - Postar/Publicar
PUT - Colaocar/Alterar
DELETE - Apagar

*/

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);
    if (!time) { //(!time) é o mesmo que (time === undefined)
        resposta.status(404).send('Não existe na série A do brasileirão um time com a sigla informada');
        return;
    }
    resposta.status(200).send(time);
})

//  :sigla serve para eu receber algum dado armazenado na variável sigla.

app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela2024.find(t => t.sigla === siglaInformada);
    const campos = Object.keys(req.body);
    console.log(campos);
    for(let campo of campos){
       timeSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(timeSelecionado);

})

app.post('/')

app.listen(300, () => console.log('Servidor rodando com sucesso'));
