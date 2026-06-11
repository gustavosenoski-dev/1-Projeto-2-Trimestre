/* =============================================
   AGRINHO 2026 — AgroFuturo Brasil
   JavaScript Compartilhado — main.js
   Funções: Tema, Navbar, Scroll, Animações
   ============================================= */

// ---- Gerenciador de Tema (Dark/Light) ----
const ThemeManager = (() => {
  const STORAGE_KEY = 'agrofuturo-theme';
  let currentTheme = localStorage.getItem(STORAGE_KEY) || 'dark';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    currentTheme = theme;

    // Atualiza ícone do botão de tema
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    }
  }

  function toggle() {
    apply(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(currentTheme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  return { init, toggle, get current() { return currentTheme; } };
})();

// ---- Navbar: scroll e menu mobile ----
const NavbarManager = (() => {
  function init() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    // Scroll shadowing
    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }
    }, { passive: true });

    // Mobile menu toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const expanded = mobileMenu.classList.contains('open');
        hamburger.setAttribute('aria-expanded', expanded);
      });
    }

    // Fechar menu ao clicar em link
    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
      });
    }

    // Marcar link ativo
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  return { init };
})();

// ---- Botão Voltar ao Topo ----
const BackToTop = (() => {
  function init() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  return { init };
})();

// ---- Animações ao scroll (Intersection Observer) ----
const ScrollAnimator = (() => {
  function init() {
    const elements = document.querySelectorAll('.animate-fade-up');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Atraso escalonado para grupos
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  return { init };
})();

// ---- Barras de Progresso animadas ----
const ProgressBars = (() => {
  function init() {
    const bars = document.querySelectorAll('.progress-bar-fill[data-width]');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width');
          setTimeout(() => {
            bar.style.width = targetWidth + '%';
          }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  }

  return { init };
})();

// ---- Contadores animados ----
const CounterAnimator = (() => {
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const isFloat = target % 1 !== 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    }, duration / steps);
  }

  function init() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  return { init };
})();

// ---- Tabs genéricas ----
const TabManager = (() => {
  function init() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const groupId = group.getAttribute('data-tab-group');
      const tabs = group.querySelectorAll('[data-tab]');
      const panels = document.querySelectorAll(`[data-tab-panel="${groupId}"]`);

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.getAttribute('data-tab');

          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          panels.forEach(p => {
            p.style.display = p.getAttribute('data-panel-id') === target ? 'block' : 'none';
          });
        });
      });

      // Ativar primeiro tab
      if (tabs[0]) tabs[0].click();
    });
  }

  return { init };
})();

// ---- Tooltip simples ----
function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    const tip = document.createElement('div');
    tip.className = 'tooltip-popup';
    tip.textContent = el.getAttribute('data-tooltip');
    tip.style.cssText = `
      position: absolute;
      background: var(--text-primary);
      color: var(--bg-primary);
      font-size: 0.75rem;
      padding: 0.35rem 0.7rem;
      border-radius: 6px;
      white-space: nowrap;
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    `;
    document.body.appendChild(tip);

    el.addEventListener('mouseenter', (e) => {
      const rect = el.getBoundingClientRect();
      tip.style.left = rect.left + 'px';
      tip.style.top  = (rect.top - 36 + window.scrollY) + 'px';
      tip.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
      tip.style.opacity = '0';
    });
  });
}

// ---- Inicialização Global ----
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  NavbarManager.init();
  BackToTop.init();
  ScrollAnimator.init();
  ProgressBars.init();
  CounterAnimator.init();
  TabManager.init();
  initTooltips();
});