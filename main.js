// ==========================================
// AGROFORTE 2026
// SCRIPT.JS
// ==========================================

// ==============================
// DARK MODE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme")) {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
}

themeToggle?.addEventListener("click", () => {

  const current =
    document.documentElement.getAttribute("data-theme");

  const next =
    current === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    next
  );

  localStorage.setItem(
    "theme",
    next
  );

});

// ==============================
// BARRA DE PROGRESSO
// ==============================

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const scrollTop =
    window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percent =
    (scrollTop / docHeight) * 100;

  progressBar.style.width =
    percent + "%";

});

// ==============================
// ANIMAÇÕES AO ROLAR
// ==============================

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".fade-up,.zoom-in"
)
.forEach(el=>{

observer.observe(el);

});

// ==============================
// CONTADORES
// ==============================

const counters =
document.querySelectorAll(
".big-number"
);

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
parseInt(
counter.innerText.replace(/\D/g,"")
);

let current =
0;

const increment =
target / 100;

const timer =
setInterval(()=>{

current += increment;

if(current >= target){

counter.innerText =
target + "%";

clearInterval(timer);

}else{

counter.innerText =
Math.floor(current) + "%";

}

},20);

};

updateCounter();

});

// ==============================
// MENU MOBILE
// ==============================

const menuBtn =
document.getElementById("menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn?.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// ==============================
// SCROLL SUAVE
// ==============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

target?.scrollIntoView({

behavior:"smooth"

});

});

});
// ==============================
// SCROLL SPY
// ==============================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(
window.scrollY >= sectionTop
){
current = section.getAttribute("id");
}

});

navItems.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){
link.classList.add("active");
}

});

});
<button id="font-minus">A-</button>
<button id="font-plus">A+</button>
// ==============================
// TAMANHO DA FONTE
// ==============================

let fontSize =
localStorage.getItem("fontSize") || 16;

document.body.style.fontSize =
fontSize + "px";

const plus =
document.getElementById("font-plus");

const minus =
document.getElementById("font-minus");

plus?.addEventListener("click",()=>{

fontSize++;

document.body.style.fontSize =
fontSize + "px";

localStorage.setItem(
"fontSize",
fontSize
);

});

minus?.addEventListener("click",()=>{

if(fontSize > 12){

fontSize--;

document.body.style.fontSize =
fontSize + "px";

localStorage.setItem(
"fontSize",
fontSize
);

}

});
<div id="simulator">

<select id="solution">

<option value="0">
Selecione
</option>

<option value="20">
Energia Solar
</option>

<option value="25">
Irrigação Inteligente
</option>

<option value="30">
Drones
</option>

<option value="35">
Biodigestor
</option>

</select>

<button id="calculate">
Calcular
</button>

<div id="result"></div>

</div>
// ==============================
// SIMULADOR
// ==============================

const calculateBtn =
document.getElementById("calculate");

calculateBtn?.addEventListener(
"click",
()=>{

const value =
Number(
document.getElementById(
"solution"
).value
);

const result =
document.getElementById(
"result"
);

result.innerHTML = `
<h3>Resultado</h3>
<p>
Economia estimada:
${value}% ao ano
</p>
`;

});
<div id="toast"></div>
// ==============================
// TOAST
// ==============================

function showToast(message){

const toast =
document.getElementById("toast");

toast.innerText =
message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}
showToast(
"Bem-vindo ao AgroForte!"
);
// ==============================
// TIMELINE
// ==============================

const timelineItems =
document.querySelectorAll(
".timeline-item"
);

const timelineObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:0.2
}

);

timelineItems.forEach(item=>{

timelineObserver.observe(item);

});
<div class="state-card" data-state="Paraná">
PR
</div>
// ==============================
// ESTADOS
// ==============================

document
.querySelectorAll(
".state-card"
)
.forEach(card=>{

card.addEventListener(
"click",
()=>{

const state =
card.dataset.state;

showToast(
"Estado selecionado: " +
state
);

});

});
<button id="top-btn">
↑
</button>
// ==============================
// VOLTAR AO TOPO
// ==============================

const topBtn =
document.getElementById(
"top-btn"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

});

topBtn?.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});