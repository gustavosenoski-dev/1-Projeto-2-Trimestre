// =====================
// MODO ESCURO
// =====================

const darkModeBtn =
document.getElementById("darkMode");

if(darkModeBtn){

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
darkModeBtn.innerHTML = "☀️";
}else{
darkModeBtn.innerHTML = "🌙";
}

});

}

// =====================
// CONTADOR DE ÁRVORES
// =====================

let contador = 0;

function plantarArvore(){

contador++;

const arvores =
document.getElementById("arvores");

if(arvores){

arvores.innerText = contador;

}

}

// =====================
// QUIZ
// =====================

const perguntas = [

{
pergunta:
"Qual destas é uma fonte de energia renovável?",

respostas:[
"Carvão",
"Petróleo",
"Energia Solar",
"Gasolina"
],

correta:2
},

{
pergunta:
"O que ajuda a economizar água na agricultura?",

respostas:[
"Irrigação Inteligente",
"Desperdício",
"Poluição",
"Queimadas"
],

correta:0
},

{
pergunta:
"Qual tecnologia ajuda a monitorar lavouras?",

respostas:[
"Lixo",
"Drones",
"Fumaça",
"Plástico"
],

correta:1
},

{
pergunta:
"O reflorestamento ajuda a:",

respostas:[
"Preservar o ambiente",
"Poluir rios",
"Destruir florestas",
"Aumentar erosão"
],

correta:0
},

{
pergunta:
"A agricultura sustentável busca:",

respostas:[
"Produzir com responsabilidade",
"Desperdiçar recursos",
"Poluir o solo",
"Desmatar"
],

correta:0
}

];

let perguntaAtual = 0;
let pontos = 0;

function carregarPergunta(){

const perguntaElemento =
document.getElementById("pergunta");

const respostasElemento =
document.getElementById("respostas");

if(!perguntaElemento || !respostasElemento){
return;
}

const pergunta =
perguntas[perguntaAtual];

perguntaElemento.innerHTML =
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

respostasElemento.innerHTML = html;

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

const resultado =
document.getElementById("resultado");

if(!resultado){
return;
}

perguntaAtual++;

if(perguntaAtual < perguntas.length){

carregarPergunta();

}else{

document.getElementById("pergunta")
.innerHTML =
"🎉 Quiz Finalizado!";

document.getElementById("respostas")
.innerHTML = "";

let classificacao = "";

if(pontos <= 2){

classificacao =
"🌱 Aprendiz da Sustentabilidade";

}
else if(pontos <= 4){

classificacao =
"🌿 Guardião da Natureza";

}
else{

classificacao =
"🏆 Mestre da Sustentabilidade";

}

resultado.innerHTML =

`
Você acertou ${pontos}
de ${perguntas.length} perguntas.

<br><br>

${classificacao}
`;

}

}

if(document.getElementById("pergunta")){
carregarPergunta();
}

// =====================
// SIMULADOR
// =====================

function calcular(){

let total = 0;

const marcados =
document.querySelectorAll(
'input[type="checkbox"]:checked'
);

marcados.forEach(item=>{

total += Number(item.value);

});

let nivel = "";

if(total <= 20){

nivel =
"🌱 Iniciante Verde";

}
else if(total <= 50){

nivel =
"🌿 Produtor Consciente";

}
else if(total <= 90){

nivel =
"🌳 Guardião da Natureza";

}
else{

nivel =
"🏆 Mestre da Sustentabilidade";

}

const resultado =
document.getElementById(
"resultadoSimulador"
);

if(resultado){

resultado.innerHTML =

`
Pontuação Sustentável:

<strong>${total}%</strong>

<br><br>

Classificação:

<strong>${nivel}</strong>
`;

}

}