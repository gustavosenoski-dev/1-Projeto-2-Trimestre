// =============================================
// AGRINHO 2026 — Agro Forte, Futuro Sustentável
// JavaScript Principal
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll effect ──
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ── Hamburger menu ──
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // ── Scroll to top button ──
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Intersection Observer: fade-up ──
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  // ── Counter de árvores ──
  initCounter();

  // ── Quiz ──
  initQuiz();

  // ── Simulador ──
  initSimulator();

  // ── Animated numbers ──
  animateNumbers();

  // ── Active nav link ──
  highlightNav();
});

// ─────────────────────────────────────────────
// CONTADOR DE ÁRVORES
// ─────────────────────────────────────────────
function initCounter() {
  const btn   = document.getElementById('plantar-btn');
  const num   = document.getElementById('arvores-num');
  const area  = document.getElementById('trees-visual');
  if (!btn || !num || !area) return;

  let total = parseInt(localStorage.getItem('agrinho_arvores') || '0');
  num.textContent = total.toLocaleString('pt-BR');

  // Restaurar árvores salvas
  for (let i = 0; i < Math.min(total, 60); i++) {
    const t = document.createElement('span');
    t.className = 'tree-item';
    t.textContent = getTree();
    area.appendChild(t);
  }

  btn.addEventListener('click', () => {
    total++;
    num.textContent = total.toLocaleString('pt-BR');
    localStorage.setItem('agrinho_arvores', total);

    const t = document.createElement('span');
    t.className = 'tree-item';
    t.textContent = getTree();
    area.appendChild(t);

    // Limpar após 80 ícones
    if (area.children.length > 80) area.removeChild(area.firstChild);

    // Efeito no botão
    btn.style.transform = 'scale(.95)';
    setTimeout(() => btn.style.transform = '', 150);
  });
}

function getTree() {
  const trees = ['🌳', '🌲', '🌴', '🌿', '🍃', '🌱'];
  return trees[Math.floor(Math.random() * trees.length)];
}

// ─────────────────────────────────────────────
// QUIZ SUSTENTÁVEL
// ─────────────────────────────────────────────
const quizData = [
  {
    q: 'Qual prática ajuda a manter a fertilidade do solo sem agroquímicos?',
    opts: ['Monocultura contínua', 'Rotação de culturas', 'Queima do campo', 'Irrigação excessiva'],
    ans: 1, exp: 'A rotação de culturas quebra ciclos de pragas e repõe nutrientes naturalmente.'
  },
  {
    q: 'O que é agricultura de precisão?',
    opts: ['Plantar em linhas retas', 'Uso de tecnologia para otimizar insumos e produção', 'Colheita manual', 'Uso de apenas ferramentas antigas'],
    ans: 1, exp: 'A agricultura de precisão usa GPS, sensores e IA para aplicar recursos somente onde necessário.'
  },
  {
    q: 'Qual é a principal vantagem dos biodigestores na fazenda?',
    opts: ['Aumentar o rebanho', 'Transformar resíduos em biogás e biofertilizante', 'Reduzir a chuva', 'Aumentar o consumo de água'],
    ans: 1, exp: 'Biodigestores aproveitam dejetos animais gerando energia limpa e adubo orgânico.'
  },
  {
    q: 'Guarapuava está localizada em qual bioma?',
    opts: ['Pantanal', 'Cerrado', 'Mata Atlântica', 'Pampa'],
    ans: 2, exp: 'Guarapuava está inserida no bioma Mata Atlântica, um dos mais biodiversos e ameaçados do planeta.'
  },
  {
    q: 'Qual tecnologia permite monitorar lavouras em tempo real sem entrar no campo?',
    opts: ['Telefone fixo', 'Drones agrícolas com sensores', 'Rádio AM', 'Espelhos'],
    ans: 1, exp: 'Drones equipados com câmeras multiespectrais identificam estresse hídrico, pragas e nutrição das plantas.'
  }
];

function initQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  let current = 0;
  let score = 0;
  let answered = false;

  function render() {
    const q = quizData[current];
    const letters = ['A', 'B', 'C', 'D'];
    const pct = (current / quizData.length) * 100;

    quizContainer.innerHTML = `
      <div class="quiz-wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-size:.82rem;color:rgba(255,255,255,.45);">Pergunta ${current + 1} de ${quizData.length}</span>
          <span style="font-size:.82rem;color:var(--lime);font-weight:700;">${score} ponto${score !== 1 ? 's' : ''}</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.opts.map((o, i) => `
            <button class="quiz-opt" data-idx="${i}">
              <span class="quiz-opt-letter">${letters[i]}</span>
              ${o}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    quizContainer.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const idx = parseInt(btn.dataset.idx);
        const btns = quizContainer.querySelectorAll('.quiz-opt');
        btns[q.ans].classList.add('correct');
        if (idx !== q.ans) {
          btn.classList.add('wrong');
        } else {
          score++;
        }
        // Explicação
        const exp = document.createElement('div');
        exp.style.cssText = `margin-top:16px;padding:16px 20px;background:rgba(181,240,62,.1);border:1px solid rgba(181,240,62,.25);border-radius:12px;font-size:.85rem;color:rgba(255,255,255,.75);`;
        exp.innerHTML = `<strong style="color:var(--lime)">💡 Saiba mais:</strong> ${q.exp}`;
        quizContainer.querySelector('.quiz-options').after(exp);
        setTimeout(next, 2800);
      });
    });
  }

  function next() {
    answered = false;
    current++;
    if (current < quizData.length) {
      render();
    } else {
      showResult();
    }
  }

  function showResult() {
    const pct = Math.round((score / quizData.length) * 100);
    const msg = pct >= 80 ? '🏆 Excelente! Você é um especialista em sustentabilidade!' :
                pct >= 60 ? '👏 Muito bom! Continue aprendendo sobre o agro sustentável.' :
                             '🌱 Bom começo! Explore nosso site para aprender mais.';
    quizContainer.innerHTML = `
      <div class="quiz-wrap" style="text-align:center;">
        <div style="font-size:4rem;margin-bottom:16px;">🌿</div>
        <div style="font-family:var(--ff-display);font-size:3.5rem;font-weight:800;color:var(--lime);">${pct}%</div>
        <div style="font-size:1.1rem;color:rgba(255,255,255,.8);margin:12px 0 8px;">${score} de ${quizData.length} acertos</div>
        <p style="color:rgba(255,255,255,.6);font-size:.95rem;margin-bottom:32px;">${msg}</p>
        <button onclick="location.reload()" class="btn btn-lime">🔄 Jogar Novamente</button>
      </div>
    `;
  }

  render();
}

// ─────────────────────────────────────────────
// SIMULADOR DE IMPACTO
// ─────────────────────────────────────────────
const simItems = [
  { id: 'solar',   icon: '☀️', label: 'Energia Solar',       val: 'Economiza até R$ 3.200/ano', agua: 5,  co2: 45, custo: 38, bio: 20 },
  { id: 'irrig',   icon: '💧', label: 'Irrigação Inteligente', val: 'Reduz 40% do gasto de água', agua: 40, co2: 15, custo: 30, bio: 10 },
  { id: 'biodig',  icon: '♻️', label: 'Biodigestor',           val: 'Gera energia e fertilizante', agua: 10, co2: 30, custo: 20, bio: 35 },
  { id: 'drone',   icon: '🚁', label: 'Drones Agrícolas',      val: 'Menos insumos, mais precisão', agua: 15, co2: 20, custo: 25, bio: 25 },
  { id: 'flores',  icon: '🌳', label: 'Reflorestamento',       val: 'Recupera biodiversidade',     agua: 20, co2: 50, custo: 5,  bio: 60 },
  { id: 'compost', icon: '🌿', label: 'Compostagem',           val: 'Reduz resíduos 70%',          agua: 8,  co2: 18, custo: 15, bio: 30 }
];

function initSimulator() {
  const wrap = document.getElementById('simulator-wrap');
  if (!wrap) return;

  let selected = new Set();

  function renderSim() {
    wrap.innerHTML = `
      <div class="sim-wrap">
        <div class="tag">Simulador de Impacto</div>
        <h3 style="font-family:var(--ff-display);font-size:1.6rem;font-weight:800;color:var(--green-900);margin:12px 0 8px;">Escolha suas soluções</h3>
        <p style="font-size:.9rem;color:var(--text-mid);margin-bottom:4px;">Selecione as tecnologias que você quer implementar na sua propriedade e veja o impacto calculado:</p>
        <div class="sim-options" id="sim-opts" style="grid-template-columns:repeat(3,1fr);">
          ${simItems.map(it => `
            <div class="sim-opt ${selected.has(it.id) ? 'selected' : ''}" data-id="${it.id}">
              <div class="sim-opt-icon">${it.icon}</div>
              <div class="sim-opt-label">${it.label}</div>
              <div class="sim-opt-val">${it.val}</div>
            </div>
          `).join('')}
        </div>
        <button id="sim-calc" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px;">
          ⚡ Calcular Impacto
        </button>
        <div id="sim-result-area" class="sim-result ${selected.size > 0 ? 'visible' : ''}"></div>
      </div>
    `;

    document.querySelectorAll('.sim-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const id = opt.dataset.id;
        selected.has(id) ? selected.delete(id) : selected.add(id);
        opt.classList.toggle('selected');
      });
    });

    document.getElementById('sim-calc').addEventListener('click', calcImpact);
  }

  function calcImpact() {
    if (selected.size === 0) {
      alert('Selecione ao menos uma solução!');
      return;
    }
    const chosen = simItems.filter(it => selected.has(it.id));
    const agua  = Math.min(99, chosen.reduce((s, it) => s + it.agua,  0));
    const co2   = Math.min(99, chosen.reduce((s, it) => s + it.co2,   0));
    const custo = Math.min(99, chosen.reduce((s, it) => s + it.custo, 0));
    const bio   = Math.min(99, chosen.reduce((s, it) => s + it.bio,   0));
    const total = Math.round((agua + co2 + custo + bio) / 4);

    const res = document.getElementById('sim-result-area');
    res.classList.add('visible');
    res.innerHTML = `
      <div style="font-size:.85rem;color:rgba(255,255,255,.5);margin-bottom:8px;">${chosen.length} solução(ões) selecionada(s)</div>
      <div class="sim-result-pct">${total}%</div>
      <div class="sim-result-label">de redução no impacto ambiental</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:20px;">
        ${chosen.map(it => `<span style="background:rgba(181,240,62,.2);color:var(--lime);font-size:.78rem;font-weight:600;padding:4px 12px;border-radius:100px;">${it.icon} ${it.label}</span>`).join('')}
      </div>
      <div class="sim-result-bars">
        ${[['💧 Água', agua], ['🌍 CO₂', co2], ['💰 Custo', custo], ['🌿 Biodiversidade', bio]].map(([l, v]) => `
          <div class="sim-bar-row">
            <span>${l} — ${v}%</span>
            <div class="sim-bar-bg"><div class="sim-bar-fill" style="width:0%" data-target="${v}"></div></div>
          </div>
        `).join('')}
      </div>
    `;
    // Animate bars
    setTimeout(() => {
      res.querySelectorAll('.sim-bar-fill').forEach(b => {
        b.style.width = b.dataset.target + '%';
      });
    }, 100);
  }

  renderSim();
}

// ─────────────────────────────────────────────
// ANIMATE NUMBERS
// ─────────────────────────────────────────────
function animateNumbers() {
  const numEls = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1600;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString('pt-BR') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  numEls.forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────
// HIGHLIGHT ACTIVE NAV
// ─────────────────────────────────────────────
function highlightNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path || (path === 'index.html' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
}