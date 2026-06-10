// =============================================
// AGRINHO 2026 — nav-footer.js
// Nav + Footer + Settings Panel (Dark/Light + Font Size)
// =============================================

/* ── HTML da Navegação ── */
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
    <div style="display:flex;align-items:center;gap:6px;">
      <button class="nav-settings-btn" id="settings-btn" aria-label="Personalizar site" title="Personalizar">⚙️</button>
      <button class="hamburger" id="hamburger-btn" aria-label="Abrir Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<nav class="mobile-menu" id="mobile-menu">
  <span class="nav-logo-mobile">Agro<span>Forte</span> 🌾</span>
  <a href="index.html">🏠 Início</a>
  <a href="solucoes.html">🌱 Soluções</a>
  <a href="guarapuava.html">📍 Guarapuava</a>
  <a href="tecnologias.html">🚀 Tecnologias</a>
  <a href="regulamento.html">📋 Regulamento</a>
  <a href="contato.html">✉️ Contato</a>
</nav>

<div class="nav-spacer"></div>
`;

/* ── HTML do Painel de Configurações ── */
const SETTINGS_HTML = `
<div class="settings-panel" id="settings-panel" role="dialog" aria-label="Personalização">
  <div class="settings-title">⚙️ &nbsp;Personalizar</div>

  <div class="settings-section">
    <span class="settings-label">Tema</span>
    <div class="theme-toggle">
      <button class="theme-btn" data-theme-set="light" id="btn-light">☀️ Claro</button>
      <button class="theme-btn" data-theme-set="dark"  id="btn-dark">🌙 Escuro</button>
    </div>
  </div>

  <div class="settings-divider"></div>

  <div class="settings-section">
    <span class="settings-label">Tamanho da Fonte</span>
    <div class="font-toggle">
      <button class="font-btn" data-size="small">A</button>
      <button class="font-btn" data-size="medium">A</button>
      <button class="font-btn" data-size="large">A</button>
    </div>
  </div>
</div>
`;

/* ── HTML do Footer ── */
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo footer-logo">
          <div class="nav-logo-icon">🌾</div>
          Agro<span>Forte</span>
        </a>
        <p>Projeto desenvolvido para o Agrinho 2026 — Ensino Médio, Front-End. Soluções sustentáveis para a agropecuária de Guarapuava/PR.</p>
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
      <span>Feito com 🌱 para o futuro de <span class="footer-city">Guarapuava</span></span>
    </div>
  </div>
</footer>
<button class="scroll-top" id="scroll-top-btn" aria-label="Voltar ao topo">↑</button>
`;

// ─────────────────────────────────────────────
// INJEÇÃO NO DOM
// ─────────────────────────────────────────────
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('afterbegin', SETTINGS_HTML);
document.body.insertAdjacentHTML('beforeend',  FOOTER_HTML);

// ─────────────────────────────────────────────
// INICIALIZAÇÃO APÓS DOM PRONTO
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Referências ──
  const html          = document.documentElement;
  const mainNav       = document.getElementById('main-nav');
  const hamburgerBtn  = document.getElementById('hamburger-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  const settingsBtn   = document.getElementById('settings-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const scrollTopBtn  = document.getElementById('scroll-top-btn');

  // ── 1. PREFERÊNCIAS SALVAS ──────────────────
  const savedTheme = localStorage.getItem('af_theme') || 'light';
  const savedFont  = localStorage.getItem('af_font')  || 'medium';
  applyTheme(savedTheme);
  applyFont(savedFont);

  // ── 2. PAINEL DE CONFIGURAÇÕES ──────────────
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('open');
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
      settingsPanel.classList.remove('open');
    }
  });

  // Botões de tema
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.themeSet;
      applyTheme(theme);
      localStorage.setItem('af_theme', theme);
    });
  });

  // Botões de fonte
  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      applyFont(size);
      localStorage.setItem('af_font', size);
    });
  });

  // ── 3. HAMBURGER MENU ───────────────────────
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isOpen);
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // ── 4. NAV SCROLL + SCROLL-TO-TOP ───────────
  window.addEventListener('scroll', () => {
    if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 20);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 5. DESTAQUE DE LINK ATIVO NA NAV ────────
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll(`.nav-links a[href="${path}"], .mobile-menu a[href="${path}"]`)
    .forEach(link => link.classList.add('active'));

});

// ─────────────────────────────────────────────
// FUNÇÕES DE PREFERÊNCIA
// ─────────────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeSet === theme);
  });
}

function applyFont(size) {
  document.documentElement.setAttribute('data-font', size);

  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
}