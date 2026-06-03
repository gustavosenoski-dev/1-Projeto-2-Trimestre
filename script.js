// ===========================
// CONTADORES ANIMADOS
// ===========================

const counters =
document.querySelectorAll(".contador");

const animateCounter = (counter) => {

const target =
+counter.getAttribute("data-target");

const updateCounter = () => {

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(
updateCounter,
20
);

}else{

counter.innerText =
target.toLocaleString("pt-BR");

}

};

updateCounter();

};

counters.forEach(counter=>{

animateCounter(counter);

});

// ===========================
// ANIMAÇÃO AO ROLAR
// ===========================

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
".card, .stat-card"
)
.forEach(el=>{

observer.observe(el);

});

// ===========================
// EFEITO HEADER
// ===========================

window.addEventListener(
"scroll",
()=>{

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,.65)";

}else{

header.style.background =
"rgba(0,0,0,.2)";

}

}
);

// ===========================
// EFEITO PARALLAX HERO
// ===========================

window.addEventListener(
"scroll",
()=>{

const hero =
document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY =
window.scrollY * 0.4 + "px";

}

}
);

// ===========================
// EFEITO NOS CARDS
// ===========================

document
.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.transform =
`
perspective(1000px)
rotateX(${(y-rect.height/2)/25}deg)
rotateY(${-(x-rect.width/2)/25}deg)
translateY(-10px)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0px)";

});

});

// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const topButton =
document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.background = "#4CAF50";
topButton.style.color = "white";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 400){

topButton.style.display =
"block";

}else{

topButton.style.display =
"none";

}

}
);

topButton.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);

// ===========================
// EFEITO DE DIGITAÇÃO
// ===========================

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const text =
heroTitle.innerHTML;

heroTitle.innerHTML = "";

let i = 0;

function typeWriter(){

if(i < text.length){

heroTitle.innerHTML +=
text.charAt(i);

i++;

setTimeout(
typeWriter,
50
);

}

}

typeWriter();

}