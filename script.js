// =========================
// AGRINHO 2026 JS
// =========================

// MENU
function toggleMenu(){
  document.querySelector("nav").classList.toggle("active");
}

// DARK MODE
function toggleTheme(){
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light":"dark"
  );
}

// LOAD THEME
window.onload = () => {
  if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
  }
  animateCounters();
};

// FONT SIZE
let fontSize = 16;

function increaseFont(){
  fontSize += 2;
  document.body.style.fontSize = fontSize+"px";
}

function decreaseFont(){
  fontSize -= 2;
  document.body.style.fontSize = fontSize+"px";
}

function resetFont(){
  fontSize = 16;
  document.body.style.fontSize = fontSize+"px";
}

// COUNTERS
function animateCounters(){
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter=>{
    let target = +counter.getAttribute("data-target");
    let count = 0;

    let interval = setInterval(()=>{
      count++;
      counter.innerText = count;
      if(count >= target) clearInterval(interval);
    },20);
  });
}