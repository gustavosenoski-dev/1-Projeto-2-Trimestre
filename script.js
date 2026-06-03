/**
 * Script de Controle Lógico do Projeto Agrinho 2026
 * Manipulação de Eventos via DOM sem código inline
 */

document.addEventListener("DOMContentLoaded", () => {
    
    console.log("🌱 [Agrinho 2026] Módulo JavaScript Inicializado Corretamente.");

    // 1. Processamento e Tratamento do Formulário de Opinião
    const feedbackForm = document.getElementById("feedbackForm");
    
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            // Cancela a recarga padrão da página exigida pelo envio HTML nativo
            event.preventDefault();
            
            // Coleta de dados inseridos nos elementos inputs
            const nomeUsuario = document.getElementById("feedback-name").value;
            const mensagemUsuario = document.getElementById("feedback-text").value;
            
            // Validação de segurança básica estrutural
            if (nomeUsuario.trim() === "" || mensagemUsuario.trim() === "") {
                alert("⚠️ Por favor, certifique-se de preencher todos os campos do formulário!");
                return;
            }
            
            // Exibição do feedback interativo via caixa de diálogo simulada
            alert(`🎉 Excelente, ${nomeUsuario}! Sua sugestão sobre inovação no campo foi registrada no sistema. Obrigado por apoiar soluções para Guarapuava!`);
            
            // Executa a limpeza dos campos de entrada
            feedbackForm.reset();
        });
    }

    // 2. Feedback de clique para os botões internos dos cards
    const botoesCards = document.querySelectorAll(".btn-card");
    botoesCards.forEach((botao) => {
        botao.addEventListener("click", () => {
            console.log("🔄 Redirecionando usuário para a seção detalhada da proposta agrícola...");
        });
    });
});