// nav-footer.js — Injeta nav e footer em todas as páginas

const NAV_HTML = `
<nav class="nav" id="main-nav">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;width:100%;">
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
    <button class="hamburger" aria-label="Menu">
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
        <a href="index.html" class="nav-logo" style="color:#fff;">
          <div class="nav-logo-icon">🌾</div>
          Agro<span style="color:var(--lime)">Forte</span>
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
          <li><a href="#">Agro Sustentável</a></li>
          <li><a href="#">Meio Ambiente</a></li>
          <li><a href="#">Energia Limpa</a></li>
          <li><a href="#">Tecnologia Rural</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Agrinho</div>
        <ul class="footer-links">
          <li><a href="regulamento.html">Regulamento</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="#">Sobre o Projeto</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 AgroForte — Agrinho Paraná</span>
      <span>Feito com 🌱 para o futuro sustentável de <span>Guarapuava</span></span>
    </div>
  </div>
</footer>
<button class="scroll-top" aria-label="Voltar ao topo">↑</button>
`;

document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);