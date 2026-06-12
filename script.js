/* ==========================
   MODO ESCURO
========================== */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀️";

    }else{

        themeBtn.textContent = "🌙";

    }

});

/* ==========================
   TAMANHO DA FONTE
========================== */

let currentFont = 100;

document.getElementById("fontIncrease")
.addEventListener("click", () => {

    currentFont += 5;

    document.body.style.fontSize =
    currentFont + "%";

});

document.getElementById("fontDecrease")
.addEventListener("click", () => {

    currentFont -= 5;

    document.body.style.fontSize =
    currentFont + "%";

});

/* ==========================
   FAQ INTERATIVO
========================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const title =
    item.querySelector("h3");

    const content =
    item.querySelector("p");

    content.style.display = "none";

    title.addEventListener("click", () => {

        const aberto =
        content.style.display === "block";

        document
        .querySelectorAll(".faq-item p")
        .forEach(p => {

            p.style.display = "none";

        });

        if(!aberto){

            content.style.display = "block";

        }

    });

});

/* ==========================
   MAPA SVG
========================== */

const regioes = {

    oeste: `
        <h3>Oeste do Paraná</h3>
        <p>
        Região líder em produção de soja,
        milho, aves e suínos.
        </p>

        <ul>
            <li>Cidade destaque: Cascavel</li>
            <li>Forte cooperativismo</li>
            <li>Alta tecnologia agrícola</li>
        </ul>
    `,

    norte: `
        <h3>Norte do Paraná</h3>
        <p>
        Região com forte produção agrícola
        e centros de pesquisa.
        </p>

        <ul>
            <li>Londrina e Maringá</li>
            <li>Universidades agrícolas</li>
            <li>Inovação tecnológica</li>
        </ul>
    `,

    centro: `
        <h3>Centro-Sul</h3>
        <p>
        Destaque para trigo, cevada e
        agricultura mecanizada.
        </p>

        <ul>
            <li>Guarapuava</li>
            <li>Grandes propriedades</li>
            <li>Alta produtividade</li>
        </ul>
    `,

    sul: `
        <h3>Sul do Paraná</h3>
        <p>
        Forte produção agropecuária e
        preservação ambiental.
        </p>

        <ul>
            <li>Produção leiteira</li>
            <li>Agricultura familiar</li>
            <li>Sustentabilidade</li>
        </ul>
    `
};

const mapa =
document.querySelectorAll(".region");

const info =
document.getElementById("regionInfo");

mapa.forEach(regiao => {

    regiao.addEventListener("click", () => {

        mapa.forEach(r => {

            r.classList.remove("active");

        });

        regiao.classList.add("active");

        info.innerHTML =
        regioes[regiao.id];

    });

});

/* ==========================
   ANIMAÇÃO AO ROLAR
========================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document
.querySelectorAll(
".problem-card, .objective-card, .tech-card, .science-card, .city-card, .future-card, .sustain-card, .stat-card, .gallery-card"
)
.forEach(card => {

    observer.observe(card);

});