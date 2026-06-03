const perguntas = [

{
pergunta: "Qual destas é uma fonte de energia renovável?",

respostas: [
"Carvão",
"Petróleo",
"Energia Solar",
"Gasolina"
],

correta: 2
},

{
pergunta: "O que ajuda a economizar água na agricultura?",

respostas: [
"Irrigação Inteligente",
"Desperdício",
"Queimadas",
"Poluição"
],

correta: 0
},

{
pergunta: "Qual tecnologia auxilia o monitoramento das lavouras?",

respostas: [
"Drones",
"Lixo",
"Fumaça",
"Plástico"
],

correta: 0
},

{
pergunta: "O reflorestamento contribui para:",

respostas: [
"Preservar o meio ambiente",
"Poluir rios",
"Aumentar queimadas",
"Destruir habitats"
],

correta: 0
},

{
pergunta: "A agricultura sustentável busca:",

respostas: [
"Produzir com responsabilidade",
"Desperdiçar recursos",
"Poluir o solo",
"Desmatar áreas"
],

correta: 0
}

];

let perguntaAtual = 0;
let pontos = 0;

function carregarPergunta(){

const pergunta =
perguntas[perguntaAtual];

document.getElementById(
"pergunta"
).innerHTML =
pergunta.pergunta;

let html = "";

pergunta.respostas.forEach(
(resposta,index)=>{

html += `
<button
class="resposta"
onclick="responder(${index})">

${resposta}

</button>
`;

});

document.getElementById(
"respostas"
).innerHTML = html;
}

function responder(indice){

const pergunta =
perguntas[perguntaAtual];

if(indice === pergunta.correta){

pontos++;

}

document
.querySelectorAll(".resposta")
.forEach(botao=>{

botao.disabled = true;

});

}

function proximaPergunta(){

perguntaAtual++;

if(
perguntaAtual <
perguntas.length
){

carregarPergunta();

}else{

document.getElementById(
"pergunta"
).innerHTML =
"🎉 Quiz Finalizado!";

document.getElementById(
"respostas"
).innerHTML = "";

let titulo = "";

if(pontos <= 2){

titulo =
"🌱 Aprendiz da Sustentabilidade";

}
else if(pontos <= 4){

titulo =
"🌿 Guardião da Natureza";

}
else{

titulo =
"🏆 Mestre da Sustentabilidade";

}

document.getElementById(
"resultado"
).innerHTML =

`
Você acertou
${pontos}
de
${perguntas.length}
perguntas.

<br><br>

${titulo}
`;

}

}

carregarPergunta();