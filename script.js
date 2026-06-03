// =====================
// MODO ESCURO
// =====================

const darkModeBtn =
document.getElementById("darkMode");

if(localStorage.getItem("tema") === "dark"){
document.body.classList.add("dark");
if(darkModeBtn){
darkModeBtn.innerHTML = "☀️";
}
}

if(darkModeBtn){

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem(
"tema",
"dark"
);

darkModeBtn.innerHTML = "☀️";

}else{

localStorage.setItem(
"tema",
"light"
);

darkModeBtn.innerHTML = "🌙";

}

});

}

// =====================
// CONTADOR DE ÁRVORES
// =====================

let contador =
Number(
localStorage.getItem(
"arvores"
)
) || 0;

const arvoresElemento =
document.getElementById(
"arvores"
);

if(arvoresElemento){
arvoresElemento.innerText =
contador;
}

function plantarArvore(){

contador++;

localStorage.setItem(
"arvores",
contador
);

if(arvoresElemento){

arvoresElemento.innerText =
contador;

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
"Qual tecnologia auxilia o monitoramento das lavouras?",

respostas:[
"Plástico",
"Fumaça",
"Drones",
"Lixo"
],

correta:2
},

{
pergunta:
"O reflorestamento ajuda a:",

respostas:[
"Preservar o ambiente",
"Poluir rios",
"Destruir habitats",
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

const pergunta =
perguntas[perguntaAtual];

const perguntaElemento =
document.getElementById(
"pergunta"
);

const respostasElemento =
document.getElementById(
"respostas"
);

if(
!perguntaElemento ||
!respostasElemento
){
return;
}

perguntaElemento.innerHTML =
`Pergunta ${perguntaAtual+1} de ${perguntas.length}<br><br>${pergunta.pergunta}`;

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

respostasElemento.innerHTML =
html;

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
).innerHTML =
"";

let classificacao = "";

if(pontos <= 1){

classificacao =
"🌱 Aprendiz";

}
else if(pontos <= 3){

classificacao =
"🌿 Guardião Ambiental";

}
else if(pontos <= 4){

classificacao =
"🌳 Protetor do Campo";

}
else{

classificacao =
"🏆 Mestre da Sustentabilidade";

}

document.getElementById(
"resultado"
).innerHTML =

`
Você acertou
<b>${pontos}</b>
de
<b>${perguntas.length}</b>
perguntas.

<br><br>

${classificacao}
`;

}

}

if(
document.getElementById(
"pergunta"
)
){
carregarPergunta();
}

// =====================
// SIMULADOR
// =====================

function calcular(){

let total = 0;

let tecnologias = [];

const selecionados =
document.querySelectorAll(
'input[type="checkbox"]:checked'
);

selecionados.forEach(item=>{

total += Number(item.value);

const texto =
item.parentElement.innerText;

tecnologias.push(texto);

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
<h3>Resultado da Simulação</h3>

<p>
Pontuação Sustentável:
<b>${total}%</b>
</p>

<p>
Classificação:
<b>${nivel}</b>
</p>

<p>
Tecnologias Selecionadas:
</p>

<p>
${tecnologias.join("<br>")}
</p>

<p>
Sua propriedade possui potencial para reduzir impactos ambientais,
economizar recursos naturais e aumentar a produtividade.
</p>
`;

}

}

// =====================
// ANIMAÇÃO AO ROLAR
// =====================

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold:0.1
}
);

document
.querySelectorAll(".card")
.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";
card.style.transition =
"0.8s";

observer.observe(card);

});