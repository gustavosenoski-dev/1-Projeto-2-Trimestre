const perguntas = [
  {
    pergunta: "1. O que significa cuidar da saúde emocional?",
    opcoes: [
      "Guardar os problemas para não incomodar ninguém.",
      "Compreender e lidar de forma saudável com os sentimentos.",
      "Estar sempre feliz sem demonstrar fraqueza."
    ],
    correta: 1
  },
  {
    pergunta: "2. Por que conversar sobre sentimentos é importante?",
    opcoes: [
      "Ajuda a aliviar o peso emocional e a encontrar apoio.",
      "Para provar aos outros que temos problemas.",
      "Não é importante, devemos resolver tudo sozinhos."
    ],
    correta: 0
  },
  {
    pergunta: "3. Qual atitude ajuda no bem-estar durante a rotina escolar?",
    opcoes: [
      "Estudar sem fazer pausas até o exaustão.",
      "Equilibrar os estudos com momentos de descanso e lazer.",
      "Deixar para estudar tudo na noite anterior à prova."
    ],
    correta: 1
  },
  {
    pergunta: "4. Quando devemos procurar apoio de um profissional de saúde mental?",
    opcoes: [
      "Apenas em casos extremamente graves.",
      "Quando sentimos que as emoções estão atrapalhando nosso dia a dia.",
      "Nunca, pois é um sinal de fraqueza."
    ],
    correta: 1
  },
  {
    pergunta: "5. O que faz parte da prática de autocuidado?",
    opcoes: [
      "Manter boas noites de sono e momentos de relaxamento.",
      "Usar telas até tarde da noite.",
      "Ignorar o cansaço físico e mental."
    ],
    correta: 0
  }
];

let indiceAtual = 0;
let pontuacao = 0;

document.addEventListener("DOMContentLoaded", () => {
  carregarPergunta();
});

function carregarPergunta() {
  const container = document.getElementById("quizContent");
  const progress = document.getElementById("progress");

  if (indiceAtual >= perguntas.length) {
    exibirResultado();
    return;
  }

  // Atualiza barra de progresso
  progress.style.width = `${((indiceAtual) / perguntas.length) * 100}%`;

  const q = perguntas[indiceAtual];
  let html = `<h3>${q.pergunta}</h3>`;

  q.opcoes.forEach((opcao, index) => {
    html += `<div class="quiz-option" onclick="responder(${index})">${opcao}</div>`;
  });

  container.innerHTML = html;
}

function responder(opcaoSelecionada) {
  if (opcaoSelecionada === perguntas[indiceAtual].correta) {
    pontuacao++;
  }
  indiceAtual++;
  carregarPergunta();
}

function exibirResultado() {
  const container = document.getElementById("quizContent");
  const progress = document.getElementById("progress");
  progress.style.width = "100%";

  let mensagem = "";
  if (pontuacao === 5) {
    mensagem = "Excelente! Você demonstra grande consciência sobre saúde emocional!";
  } else if (pontuacao >= 3) {
    mensagem = "Muito bem! Você conhece caminhos importantes para o autocuidado.";
  } else {
    mensagem = "Continue explorando nosso portal para aprender mais sobre cuidado emocional!";
  }

  container.innerHTML = `
    <div style="text-align: center;">
      <i class="fa-solid fa-award" style="font-size: 3rem; color: var(--primary); margin-bottom: 15px;"></i>
      <h3>Quiz Concluído!</h3>
      <p style="font-size: 1.2rem; margin: 15px 0;">Você acertou <strong>${pontuacao}</strong> de ${perguntas.length} perguntas.</p>
      <p style="color: var(--text-muted);">${mensagem}</p>
      <button onclick="reiniciarQuiz()" class="btn btn-primary" style="margin-top: 20px;">Refazer Quiz</button>
    </div>
  `;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  carregarPergunta();
}