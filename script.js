/* =========================================================================
   EquilibraMente — script.js
   Comportamentos compartilhados por todas as páginas:
   navbar dinâmica, menu mobile, revelação no scroll, contadores animados,
   acordeão de conteúdos, painel de acessibilidade e botão voltar ao topo.

   IMPORTANTE: este arquivo NÃO coleta, envia ou armazena nenhuma informação
   pessoal do usuário. As únicas preferências salvas no navegador (via
   localStorage) são de INTERFACE: tamanho de fonte, tema escuro e alto
   contraste — nada relacionado à identidade ou aos sentimentos da pessoa.
   ========================================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. Navbar dinâmica (fundo ao rolar) + menu mobile
     ---------------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------------------
     2. Marcar link ativo da navbar conforme a página atual
     ---------------------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------------------
     3. Revelação suave de elementos ao rolar a página
     ---------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ----------------------------------------------------------------------
     4. Contadores animados (seção de estatísticas)
     ---------------------------------------------------------------------- */
  const counters = document.querySelectorAll('[data-counter]');
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = prefersReducedMotion ? 0 : 1400;
    const start = performance.now();

    function tick(now) {
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString('pt-BR') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ----------------------------------------------------------------------
     5. Acordeão de conteúdos educativos
     ---------------------------------------------------------------------- */
  document.querySelectorAll('.accordion-item').forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha os demais itens do mesmo acordeão (comportamento tipo "sanfona")
      const parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-item.open').forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.accordion-panel').style.maxHeight = null;
            openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : null;
    });
  });

  /* ----------------------------------------------------------------------
     6. Botão "Voltar ao topo"
     ---------------------------------------------------------------------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener(
      'scroll',
      () => {
        backToTop.classList.toggle('show', window.scrollY > 500);
      },
      { passive: true }
    );
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ----------------------------------------------------------------------
     7. Painel de acessibilidade
     Salva SOMENTE preferências de interface (fonte, tema, contraste).
     ---------------------------------------------------------------------- */
  const a11yTrigger = document.querySelector('.a11y-trigger');
  const a11yPanel = document.querySelector('.a11y-panel');
  const root = document.documentElement;

  const STORAGE_KEY = 'equilibramente-preferencias-interface';

  function loadPrefs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { scale: 1, theme: 'light', contrast: 'normal' };
    } catch (e) {
      return { scale: 1, theme: 'light', contrast: 'normal' };
    }
  }

  function savePrefs(prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      /* Ambiente sem acesso a localStorage: preferências não serão persistidas,
         mas a navegação continua funcionando normalmente. */
    }
  }

  let prefs = loadPrefs();

  function applyPrefs() {
    root.style.setProperty('--scale', prefs.scale);
    root.setAttribute('data-theme', prefs.theme);
    root.setAttribute('data-contrast', prefs.contrast);

    const darkSwitch = document.querySelector('[data-toggle="theme"]');
    const contrastSwitch = document.querySelector('[data-toggle="contrast"]');
    if (darkSwitch) darkSwitch.setAttribute('aria-pressed', String(prefs.theme === 'dark'));
    if (contrastSwitch) contrastSwitch.setAttribute('aria-pressed', String(prefs.contrast === 'high'));
  }
  applyPrefs();

  if (a11yTrigger && a11yPanel) {
    a11yTrigger.addEventListener('click', () => {
      const isOpen = a11yPanel.classList.toggle('open');
      a11yTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (
        a11yPanel.classList.contains('open') &&
        !a11yPanel.contains(e.target) &&
        !a11yTrigger.contains(e.target)
      ) {
        a11yPanel.classList.remove('open');
        a11yTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.querySelectorAll('[data-font]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-font');
        if (action === 'increase') prefs.scale = Math.min(prefs.scale + 0.1, 1.4);
        if (action === 'decrease') prefs.scale = Math.max(prefs.scale - 0.1, 0.85);
        if (action === 'reset') prefs.scale = 1;
        applyPrefs();
        savePrefs(prefs);
      });
    });

    const themeSwitch = document.querySelector('[data-toggle="theme"]');
    if (themeSwitch) {
      themeSwitch.addEventListener('click', () => {
        prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';
        applyPrefs();
        savePrefs(prefs);
      });
    }

    const contrastSwitch = document.querySelector('[data-toggle="contrast"]');
    if (contrastSwitch) {
      contrastSwitch.addEventListener('click', () => {
        prefs.contrast = prefs.contrast === 'high' ? 'normal' : 'high';
        applyPrefs();
        savePrefs(prefs);
      });
    }
  }

  /* ----------------------------------------------------------------------
     8. Ano atual no rodapé
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ----------------------------------------------------------------------
     9. "Falar com alguém" — leva ao Portal de Escuta
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-goto-escuta]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = 'escuta.html';
    });
  });
})();