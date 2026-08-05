document.addEventListener("DOMContentLoaded", () => {
  // --- Modos de Cor ---
  const themeBtn = document.getElementById("darkMode");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  // --- Controles de Fonte & Contraste ---
  let fontSize = 100;
  const btnIncrease = document.getElementById("increaseFont");
  const btnDecrease = document.getElementById("decreaseFont");
  const btnContrast = document.getElementById("toggleContrast");

  if (btnIncrease) {
    btnIncrease.addEventListener("click", () => {
      if (fontSize < 130) {
        fontSize += 10;
        document.documentElement.style.fontSize = `${fontSize}%`;
      }
    });
  }

  if (btnDecrease) {
    btnDecrease.addEventListener("click", () => {
      if (fontSize > 80) {
        fontSize -= 10;
        document.documentElement.style.fontSize = `${fontSize}%`;
      }
    });
  }

  if (btnContrast) {
    btnContrast.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });
  }

  // --- Botão Voltar ao Topo ---
  const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "grid";
    } else {
      btnTopo.style.display = "none";
    }
  });

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});