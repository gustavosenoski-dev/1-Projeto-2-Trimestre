// ===============================
// AGRINHO 2026 - PRO JS
// ===============================

// ---------- CONFIG GLOBAL ----------
let fontSize = localStorage.getItem("fontSize")
  ? parseInt(localStorage.getItem("fontSize"))
  : 16;

// APPLY FONT SIZE GLOBAL
function applyFont() {
  document.documentElement.style.fontSize = fontSize + "px";
  localStorage.setItem("fontSize", fontSize);
}

// ---------- MENU MOBILE ----------
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

// ---------- DARK MODE ----------
function toggleTheme() {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

// LOAD SETTINGS
window.addEventListener("load", () => {
  applyFont();

  const theme = localStorage.getItem("theme");
  if (theme === "light") document.body.classList.add("light");

  animateCounters();
});

// ---------- FONT CONTROLS ----------
function increaseFont() {
  fontSize += 2;
  applyFont();
}

function decreaseFont() {
  if (fontSize > 10) {
    fontSize -= 2;
    applyFont();
  }
}

function resetFont() {
  fontSize = 16;
  applyFont();
}

// ---------- COUNTERS ----------
function animateCounters() {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let count = 0;

    const speed = Math.max(10, Math.floor(2000 / target));

    const interval = setInterval(() => {
      count++;
      counter.innerText = count;

      if (count >= target) clearInterval(interval);
    }, speed);
  });
}