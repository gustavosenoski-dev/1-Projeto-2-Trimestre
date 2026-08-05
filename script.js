// =========================
// MODO ESCURO
// =========================

const tema = document.getElementById("tema");

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        tema.textContent = "☀️";
    }else{
        tema.textContent = "🌙";
    }
});


// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topo.style.display = "block";
    }else{
        topo.style.display = "none";
    }

});

topo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// =========================
// PORTAL DE ESCUTA
// =========================

const formulario = document.getElementById("formEscuta");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        document.getElementById("mensagem").innerHTML = `
        <p>
        💙 Obrigado por compartilhar seus sentimentos.<br><br>

        Este espaço é apenas uma simulação educativa.<br>
        Nenhuma informação foi enviada ou armazenada.<br><br>

        Caso esteja passando por dificuldades,
        procure um adulto de confiança ou um profissional especializado.
        </p>
        `;

        formulario.reset();

    });

}



// =========================
// QUIZ
// =========================

const perguntas = [

{
pergunta:"1. O que significa cuidar da saúde emocional?",
opcoes:[
"Guardar todos os sentimentos",
"Compreender e cuidar das emoções",
"Evitar conversar com qualquer pessoa"
],
correta:1
},

{
pergunta:"2. Conversar sobre sentimentos é importante porque...",
opcoes:[
"Ajuda a buscar apoio",
"É perda de tempo",
"Não faz diferença"
],
correta:0
},

{
pergunta:"3. Qual atitude ajuda no bem-estar?",
opcoes:[
"Dormir pouco",
"Manter hábitos saudáveis",
"Estudar sem descanso"
],
correta:1
},

{
pergunta:"4. Quando devemos procurar ajuda?",
opcoes:[
"Quando sentimos necessidade",
"Nunca",
"Apenas em provas"
],
correta:0
},

{
pergunta:"5. O que faz parte do autocuidado?",
opcoes:[
"Boa alimentação",
"Não descansar",
"Ficar isolado"
],
correta:0
}

];

let atual = 0;
let pontos = 0;

const iniciar = document.getElementById("iniciarQuiz");
const quiz = document.getElementById("quizContainer");

if(iniciar){

iniciar.addEventListener("click", iniciarQuiz);

}

function iniciarQuiz(){

iniciar.style.display="none";

mostrarPergunta();

}

function mostrarPergunta(){

const p = perguntas[atual];

quiz.innerHTML = `
<h3>${p.pergunta}</h3>

${p.opcoes.map((opcao,i)=>

`<button class="btn opcao" onclick="responder(${i})">
${opcao}
</button><br><br>`

).join("")}

`;

}

function responder(escolha){

if(escolha===perguntas[atual].correta){

pontos++;

}

atual++;

if(atual<perguntas.length){

mostrarPergunta();

}else{

resultado();

}

}

function resultado(){

let mensagem="";

if(pontos==5){

mensagem="🎉 Excelente! Você demonstra ótimo conhecimento sobre saúde emocional.";

}else if(pontos>=3){

mensagem="😊 Muito bem! Continue aprendendo e cuidando da sua saúde emocional.";

}else{

mensagem="💙 Continue estudando. Cuidar da mente é um aprendizado constante.";

}

quiz.innerHTML=`

<h2>Resultado</h2>

<p>Você acertou <strong>${pontos}</strong> de 5 perguntas.</p>

<p>${mensagem}</p>

<button class="btn" onclick="location.reload()">
Refazer Quiz
</button>

`;

}