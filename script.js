// =============================================
// AGRINHO 2026 — script.js
// Módulos: Observer, Counter, Quiz, Simulator, Numbers
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initIntersectionObserver();
  initCounter();
  initQuiz();
  initSimulator();
  animateNumbers();
});

// ─────────────────────────────────────────────
// 1. FADE-UP — Intersection Observer
// ─────────────────────────────────────────────
function initIntersectionObserver() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay, 10) || 0;
      setTimeout(
        () => entry.target.classList.add('visible'),
        delay > 0 ? delay * 120 : 0
      );
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────
// 2. CONTADOR DE ÁRVORES
// ─────────────────────────────────────────────
function initCounter() {
  const btn  = document.getElementById('plantar-btn');
  const num  = document.getElementById('arvores-num');
  const area = document.getElementById('trees-visual');
  if (!btn || !num || !area) return;

  let total = parseInt(localStorage.getItem('agrinho_arvores') || '0', 10);
  num.textContent = total.toLocaleString('pt-BR');

  // Renderiza ícones já salvos (limite visual de 60)
  const frag = document.createDocumentFragment();
  for (let i = 0; i < Math.min(total, 60); i++) {
    const t = document.createElement('span');
    t.className = 'tree-item';
    t.textContent = randomTree();
    frag.appendChild(t);
  }
  area.appendChild(frag);

  btn.addEventListener('click', () => {
    total++;
    num.textContent = total.toLocaleString('pt-BR');
    localStorage.setItem('agrinho_arvores', total);

    const t = document.createElement('span');
    t.className = 'tree-item animated-scale';
    t.textContent = randomTree();
    area.appendChild(t);

    // Evita DOM infinito
    if (area.children.length > 80) area.removeChild(area.firstChild);

    btn.classList.add('btn-click-effect');
    setTimeout(() => btn.classList.remove('btn-click-effect'), 150);
  });
}

function randomTree() {
  return ['🌳','🌲','🌴','🌿','🍃','🌱'][Math.floor(Math.random() * 6)];
}

// ─────────────────────────────────────────────
// 3. QUIZ SUSTENTÁVEL
// ─────────────────────────────────────────────
const QUIZ_DATA = [
  {
    q: 'Qual prática ajuda a manter a fertilidade do solo sem agroquímicos?',
    opts: ['Monocultura contínua', 'Rotação de culturas', 'Queima do campo', 'Irrigação excessiva'],
    ans: 1,
    exp: 'A rotação de culturas quebra ciclos de pragas e repõe nutrientes naturalmente.'
  },
  {
    q: 'O que é agricultura de precisão?',
    opts: ['Plantar em linhas retas', 'Uso de tecnologia para otimizar insumos', 'Colheita manual', 'Uso de ferramentas antigas'],
    ans: 1,
    exp: 'Agricultura de precisão usa GPS, sensores e IA para aplicar recursos somente onde necessário.'
  },
  {
    q: 'Qual a principal vantagem dos biodigestores na fazenda?',
    opts: ['Aumentar o rebanho', 'Transformar resíduos em biogás e biofertilizante', 'Reduzir a chuva', 'Aumentar o consumo de água'],
    ans: 1,
    exp: 'Biodigestores aproveitam dejetos animais gerando energia limpa e adubo orgânico.'
  },
  {
    q: 'Guarapuava está localizada em qual bioma?',
    opts: ['Pantanal', 'Cerrado', 'Mata Atlântica', 'Pampa'],
    ans: 2,
    exp: 'Guarapuava está inserida na Mata Atlântica, um dos biomas mais biodiversos do planeta.'
  },
  {
    q: 'Qual tecnologia permite monitorar lavouras sem entrar no campo?',
    opts: ['Telefone fixo', 'Drones agrícolas com sensores', 'Rádio AM', 'Espelhos'],
    ans: 1,
    exp: 'Drones com câmeras multiespectrais identificam estresse hídrico, pragas e nutrição das plantas.'
  }
];

function initQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  let current = 0, score = 0, answered = false;
  const letters = ['A', 'B', 'C', 'D'];

  function render() {
    const q   = QUIZ_DATA[current];
    const pct = (current / QUIZ_DATA.length) * 100;

    container.innerHTML = `
      <div class="quiz-wrap">
        <div class="quiz-header">
          <span class="quiz-meta">Pergunta ${current + 1} de ${QUIZ_DATA.length}</span>
          <span class="quiz-score" id="q-score">${score} ponto${score !== 1 ? 's' : ''}</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.opts.map((o, i) => `
            <button class="quiz-opt" data-idx="${i}">
              <span class="quiz-opt-letter">${letters[i]}</span>
              <span>${o}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx  = parseInt(btn.dataset.idx, 10);
        const btns = container.querySelectorAll('.quiz-opt');
        btns[q.ans].classList.add('correct');
        if (idx !== q.ans) {
          btn.classList.add('wrong');
        } else {
          score++;
          container.querySelector('#q-score').textContent =
            `${score} ponto${score !== 1 ? 's' : ''}`;
        }

        const exp = document.createElement('div');
        exp.className = 'quiz-explanation-box';
        exp.innerHTML = `<strong>💡 Saiba mais:</strong> ${q.exp}`;
        container.querySelector('.quiz-options').after(exp);

        setTimeout(next, 2800);
      });
    });
  }

  function next() {
    answered = false;
    current++;
    current < QUIZ_DATA.length ? render() : showResult();
  }

  function showResult() {
    const pct = Math.round((score / QUIZ_DATA.length) * 100);
    const msg = pct >= 80
      ? '🏆 Excelente! Você é um especialista em sustentabilidade!'
      : pct >= 60
      ? '👏 Muito bom! Continue aprendendo sobre o agro sustentável.'
      : '🌱 Bom começo! Explore o site para aprender mais.';

    container.innerHTML = `
      <div class="quiz-wrap text-center">
        <div class="quiz-result-icon">🌿</div>
        <div class="quiz-result-pct">${pct}%</div>
        <div class="quiz-result-summary">${score} de ${QUIZ_DATA.length} acertos</div>
        <p class="quiz-result-text">${msg}</p>
        <button onclick="window.location.reload()" class="btn btn-lime">🔄 Jogar Novamente</button>
      </div>
    `;
  }

  render();
}

// ─────────────────────────────────────────────
// 4. SIMULADOR DE IMPACTO
// ─────────────────────────────────────────────
const SIM_ITEMS = [
  { id: 'solar',   icon: '☀️', label: 'Energia Solar',        val: 'Economiza até R$ 3.200/ano',   agua: 5,  co2: 45, custo: 38, bio: 20 },
  { id: 'irrig',   icon: '💧', label: 'Irrigação Inteligente', val: 'Reduz 40% do gasto hídrico',   agua: 40, co2: 15, custo: 30, bio: 10 },
  { id: 'biodig',  icon: '♻️', label: 'Biodigestor',           val: 'Gera energia e fertilizante',  agua: 10, co2: 30, custo: 20, bio: 35 },
  { id: 'drone',   icon: '🚁', label: 'Drones Agrícolas',      val: 'Menos insumos, mais precisão', agua: 15, co2: 20, custo: 25, bio: 25 },
  { id: 'flores',  icon: '🌳', label: 'Reflorestamento',       val: 'Recupera biodiversidade',      agua: 20, co2: 50, custo: 5,  bio: 60 },
  { id: 'compost', icon: '🌿', label: 'Compostagem',           val: 'Reduz resíduos em 70%',        agua: 8,  co2: 18, custo: 15, bio: 30 }
];

function initSimulator() {
  const wrap = document.getElementById('simulator-wrap');
  if (!wrap) return;

  const selected = new Set();

  function renderSim() {
    wrap.innerHTML = `
      <div class="sim-wrap">
        <div class="tag">Simulador de Impacto</div>
        <h3 class="sim-title">Escolha suas soluções</h3>
        <p class="sim-desc">Selecione as tecnologias que deseja implementar e veja o impacto calculado na sua propriedade:</p>
        <div class="sim-options">
          ${SIM_ITEMS.map(it => `
            <div class="sim-opt ${selected.has(it.id) ? 'selected' : ''}" data-id="${it.id}">
              <div class="sim-opt-icon">${it.icon}</div>
              <div class="sim-opt-label">${it.label}</div>
              <div class="sim-opt-val">${it.val}</div>
            </div>
          `).join('')}
        </div>
        <button id="sim-calc" class="btn btn-primary btn-full">⚡ Calcular Impacto</button>
        <div id="sim-result-area" class="sim-result"></div>
      </div>
    `;

    wrap.querySelectorAll('.sim-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const id = opt.dataset.id;
        selected.has(id) ? selected.delete(id) : selected.add(id);
        opt.classList.toggle('selected');
      });
    });

    // CORREÇÃO: document.getElementById, não wrap.getElementById
    document.getElementById('sim-calc').addEventListener('click', calcImpact);
  }

  function calcImpact() {
    if (selected.size === 0) {
      alert('Selecione ao menos uma solução!');
      return;
    }

    const chosen = SIM_ITEMS.filter(it => selected.has(it.id));
    const agua   = Math.min(99, chosen.reduce((s, it) => s + it.agua,  0));
    const co2    = Math.min(99, chosen.reduce((s, it) => s + it.co2,   0));
    const custo  = Math.min(99, chosen.reduce((s, it) => s + it.custo, 0));
    const bio    = Math.min(99, chosen.reduce((s, it) => s + it.bio,   0));
    const total  = Math.round((agua + co2 + custo + bio) / 4);

    const res = document.getElementById('sim-result-area');
    res.classList.add('visible');
    res.innerHTML = `
      <div class="sim-result-meta">${chosen.length} solução(ões) selecionada(s)</div>
      <div class="sim-result-pct">${total}%</div>
      <div class="sim-result-summary-label">de redução no impacto ambiental</div>
      <div class="sim-badges-container">
        ${chosen.map(it => `<span class="sim-pill">${it.icon} ${it.label}</span>`).join('')}
      </div>
      <div class="sim-result-bars">
        ${[
          ['💧 Preservação de Água',     agua],
          ['🌍 Redução de CO₂',          co2],
          ['💰 Economia Operacional',    custo],
          ['🌿 Ganho em Biodiversidade', bio]
        ].map(([label, value]) => `
          <div class="sim-bar-row">
            <div class="sim-bar-labels">
              <span>${label}</span>
              <strong>${value}%</strong>
            </div>
            <div class="sim-bar-bg">
              <div class="sim-bar-fill" style="width:0%" data-target="${value}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Anima barras com delay para CSS transition funcionar
    requestAnimationFrame(() => {
      setTimeout(() => {
        res.querySelectorAll('.sim-bar-fill').forEach(b => {
          b.style.width = `${b.dataset.target}%`;
        });
      }, 60);
    });
  }

  renderSim();
}

// ─────────────────────────────────────────────
// 5. CONTADORES NUMÉRICOS ANIMADOS
// ─────────────────────────────────────────────
function animateNumbers() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el       = entry.target;
      const target   = parseInt(el.dataset.count, 10);
      const suffix   = el.dataset.suffix || '';
      const duration = 1500;
      let start      = null;

      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString('pt-BR') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });

  els.forEach(el => obs.observe(el));
}