document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEscuta");
  const feedback = document.getElementById("feedbackMensagem");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio do formulário

      // Exibe a mensagem acolhedora sem armazenar nada
      form.reset();
      form.style.display = "none";
      feedback.style.display = "block";
    });
  }
});