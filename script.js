/* ==========================
   CARDS CLICÁVEIS
========================== */

function toggleCard(card){

    card.classList.toggle("active");

}

/* ==========================
   MODO ESCURO
========================== */

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀️";

    }else{

        themeBtn.textContent = "🌙";

    }

});

/* ==========================
   AUMENTAR E DIMINUIR FONTE
========================== */

let currentSize = 100;

document
.getElementById("fontIncrease")
.addEventListener("click",()=>{

    currentSize += 10;

    document.body.style.fontSize =
    currentSize + "%";

});

document
.getElementById("fontDecrease")
.addEventListener("click",()=>{

    currentSize -= 10;

    if(currentSize < 80){

        currentSize = 80;

    }

    document.body.style.fontSize =
    currentSize + "%";

});

/* ==========================
   MAPA / REGIÕES
========================== */

function showRegion(region){

const info =
document.getElementById("regionInfo");

const regions = {

oeste:`

<h3>🌽 Região Oeste</h3>

<p>
A região Oeste é uma das mais produtivas
do Paraná.
</p>

<ul>
<li><strong>Cidade destaque:</strong> Cascavel</li>
<li><strong>Produção:</strong> Milho, Frango e Suínos</li>
<li><strong>Participação:</strong> 32%</li>
<li><strong>Tecnologia:</strong> Agricultura de Precisão</li>
</ul>

`,

norte:`

<h3>🌱 Região Norte</h3>

<p>
Importante centro agrícola e tecnológico.
</p>

<ul>
<li><strong>Cidade destaque:</strong> Londrina</li>
<li><strong>Produção:</strong> Soja, Café e Milho</li>
<li><strong>Participação:</strong> 21%</li>
<li><strong>Tecnologia:</strong> Pesquisas Agrícolas</li>
</ul>

`,

sul:`

<h3>🌾 Região Sul</h3>

<p>
Conhecida pela produção de trigo e cevada.
</p>

<ul>
<li><strong>Cidade destaque:</strong> Guarapuava</li>
<li><strong>Produção:</strong> Trigo e Cevada</li>
<li><strong>Participação:</strong> 18%</li>
<li><strong>Tecnologia:</strong> Monitoramento Climático</li>
</ul>

`,

centro:`

<h3>🚜 Centro-Sul</h3>

<p>
Região estratégica para o desenvolvimento
agrícola estadual.
</p>

<ul>
<li><strong>Cidade destaque:</strong> Ponta Grossa</li>
<li><strong>Produção:</strong> Soja e Milho</li>
<li><strong>Participação:</strong> 15%</li>
<li><strong>Tecnologia:</strong> Sensores Inteligentes</li>
</ul>

`

};

info.innerHTML = regions[region];

}

/* ==========================
   FAQ ACORDEÃO
========================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const answer =
item.querySelector("p");

answer.style.display = "none";

item.addEventListener("click",()=>{

if(answer.style.display === "block"){

answer.style.display = "none";

}else{

answer.style.display = "block";

}

});

});

/* ==========================
   ANIMAÇÃO DAS BARRAS
========================== */

const bars =
document.querySelectorAll(".progress-fill");

window.addEventListener("load",()=>{

bars.forEach(bar=>{

const width =
bar.style.width;

bar.style.width = "0";

setTimeout(()=>{

bar.style.width = width;

bar.style.transition =
"2s ease";

},500);

});

});

/* ==========================
   HEADER TRANSPARENTE
========================== */

window.addEventListener("scroll",()=>{

const header =
document.querySelector(".header");

if(window.scrollY > 100){

header.style.background =
"rgba(255,255,255,.98)";

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.1)";

}else{

header.style.background =
"rgba(255,255,255,.92)";

header.style.boxShadow =
"none";

}

});

/* ==========================
   SCROLL SUAVE
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document
.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================
   ANIMAÇÃO AO ENTRAR NA TELA
========================== */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0)";

}

});

});

document
.querySelectorAll(
".problem-card,.objective-card,.science-card,.tech-card,.city-card,.future-card,.sustain-card,.fact-card"
)
.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";
card.style.transition =
".8s ease";

observer.observe(card);

});