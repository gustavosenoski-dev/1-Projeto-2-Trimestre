// nav-footer.js — Injeta nav, footer e gerencia interações globais

const NAV_HTML = `
<nav class="nav" id="main-nav">
  <div class="container nav-container">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">🌾</div>
      Agro<span>Forte</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="solucoes.html">Soluções</a></li>
      <li><a href="guarapuava.html">Guarapuava</a></li>
      <li><a href="tecnologias.html">Tecnologias</a></li>
      <li><a href="regulamento.html">Regulamento</a></li>
      <li><a href="contato.html" class="nav-cta">Contato</a></li>
    </ul>
    <button class="hamburger" id="hamburger-btn" aria-label="Abrir Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<nav class="mobile-menu" id="mobile-menu">
  <a href="index.html">🏠 Início</a>
  <a href="solucoes.html">🌱 Soluções</a>
  <a href="guarapuava.html">📍 Guarapuava</a>
  <a href="tecnologias.html">🚀 Tecnologias</a>
  <a href="regulamento.html">📋 Regulamento</a>
  <a href="contato.html">✉️ Contato</a>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo footer-logo">
          <div class="nav-logo-icon">🌾</div>
          Agro<span>Forte</span>
        </a>
        <p>Projeto desenvolvido para o Agrinho 2026 — Ensino Médio, Subcategoria Front-End. Explorando soluções sustentáveis para a agropecuária de Guarapuava/PR.</p>
      </div>
      <div>
        <div class="footer-heading">Páginas</div>
        <ul class="footer-links">
          <li><a href="index.html">Início</a></li>
          <li><a href="solucoes.html">Soluções</a></li>
          <li><a href="guarapuava.html">Guarapuava</a></li>
          <li><a href="tecnologias.html">Tecnologias</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Tema</div>
        <ul class="footer-links">
          <li><a href="solucoes.html#solar">Agro Sustentável</a></li>
          <li><a href="solucoes.html#reflorestamento">Meio Ambiente</a></li>
          <li><a href="solucoes.html#irrigacao">Energia Limpa</a></li>
          <li><a href="tecnologias.html">Tecnologia Rural</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Agrinho</div>
        <ul class="footer-links">
          <li><a href="regulamento.html">Regulamento</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="guarapuava.html">Sobre o Projeto</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 AgroForte — Agrinho Paraná</span>
      <span>Feito com 🌱 para o futuro sustentável de <span class="footer-city">Guarapuava</span></span>
    </div>
  </div>
</footer>
<button class="scroll-top" id="scroll-top-btn" aria-label="Voltar ao topo">↑</button>
`;

// Injeção dos elementos no DOM
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

/* ──────────────────────────────────────────────────────────────────
   LÓGICA DE INTERAÇÃO (Menu Hamburguer & Scroll Top)
   ────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // 1. Menu Mobile Alternar (Toggle)
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link interno dele
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // 2. Botão Voltar ao Topo & Efeito de rolagem na Nav
  window.addEventListener('scroll', () => {
    // Exibe o botão de rolagem após descer 400px
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Opcional: Adiciona classe 'scrolled' na nav para aplicar sombra via CSS
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
      if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }
  });

  // Ação de clique para subir suavemente
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});