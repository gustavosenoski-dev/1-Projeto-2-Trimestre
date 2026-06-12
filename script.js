/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});

/* ==========================
   ANO AUTOMÁTICO
========================== */

document.getElementById("currentYear").textContent =
new Date().getFullYear();

/* ==========================
   DARK MODE
========================== */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* ==========================
   AUMENTAR FONTE
========================== */

let fontSize = 100;

document
.getElementById("fontIncrease")
.addEventListener("click", () => {

    fontSize += 10;

    document.body.style.fontSize =
    fontSize + "%";

});

document
.getElementById("fontDecrease")
.addEventListener("click", () => {

    if(fontSize > 70){

        fontSize -= 10;

        document.body.style.fontSize =
        fontSize + "%";

    }

});

/* ==========================
   MENU MOBILE
========================== */

const menuBtn =
document.querySelector(".menu-mobile");

const nav =
document.querySelector(".nav");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/* ==========================
   BOTÃO TOPO
========================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
/* ==========================
   MODAL DOS INDICADORES
========================== */

const infoModal =
document.getElementById("infoModal");

const infoTitle =
document.getElementById("infoTitle");

const infoText =
document.getElementById("infoText");

const closeInfo =
document.getElementById("closeInfo");

function showStatInfo(tipo){

    const dados = {

        soja:{

            titulo:"Produção de Soja",

            texto:`

            <p><strong>Produção:</strong> 25 milhões de toneladas</p>

            <p><strong>Participação Nacional:</strong> cerca de 18%</p>

            <p><strong>Principais Destinos:</strong> China, Europa e América do Sul</p>

            <p><strong>Importância:</strong> uma das principais culturas agrícolas do Paraná.</p>

            `

        },

        milho:{

            titulo:"Produção de Milho",

            texto:`

            <p><strong>Produção:</strong> 15 milhões de toneladas</p>

            <p><strong>Participação Nacional:</strong> aproximadamente 12%</p>

            <p><strong>Uso:</strong> alimentação humana, animal e exportação.</p>

            <p><strong>Destaque:</strong> uma das maiores safras do país.</p>

            `

        },

        municipios:{

            titulo:"Municípios do Paraná",

            texto:`

            <p><strong>Total:</strong> 399 municípios.</p>

            <p><strong>Área:</strong> mais de 199 mil km².</p>

            <p><strong>Destaque:</strong> forte presença agrícola em praticamente todo o estado.</p>

            `

        },

        exportacao:{

            titulo:"Exportações",

            texto:`

            <p><strong>Mais de 100 países importadores.</strong></p>

            <p><strong>Porto Principal:</strong> Paranaguá.</p>

            <p><strong>Produtos:</strong> soja, milho, carne de frango e derivados.</p>

            <p><strong>Impacto:</strong> bilhões de reais movimentados anualmente.</p>

            `

        }

    };

    infoTitle.innerHTML =
    dados[tipo].titulo;

    infoText.innerHTML =
    dados[tipo].texto;

    infoModal.classList.add("active");

}

closeInfo.addEventListener("click", () => {

    infoModal.classList.remove("active");

});

window.addEventListener("click", (e) => {

    if(e.target === infoModal){

        infoModal.classList.remove("active");

    }

});
/* ==========================
   MAPA INTERATIVO
========================== */

const mapInfo =
document.getElementById("mapInfo");

const regionButtons =
document.querySelectorAll("[data-region]");

const regioes = {

    oeste:{

        titulo:"🌽 Região Oeste",

        cidade:"Cascavel, Toledo e Marechal Cândido Rondon",

        producao:"Milho, Frango e Suínos",

        participacao:"32% da produção agrícola estadual",

        cor:"#4CAF50"

    },

    norte:{

        titulo:"🌱 Região Norte",

        cidade:"Londrina, Apucarana e Arapongas",

        producao:"Soja, Café e Milho",

        participacao:"21% da produção agrícola estadual",

        cor:"#8BC34A"

    },

    sul:{

        titulo:"🌾 Região Sul",

        cidade:"Ponta Grossa, União da Vitória e Irati",

        producao:"Soja, Milho e Feijão",

        participacao:"15% da produção agrícola estadual",

        cor:"#66BB6A"

    },

    centro:{

        titulo:"🚜 Centro-Sul",

        cidade:"Guarapuava, Prudentópolis e Pitanga",

        producao:"Trigo, Cevada e Florestas Plantadas",

        participacao:"18% da produção agrícola estadual",

        cor:"#2E7D32"

    }

};

regionButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const regiao =
        regioes[btn.dataset.region];

        mapInfo.innerHTML = `

        <h3>${regiao.titulo}</h3>

        <p><strong>Cidades:</strong> ${regiao.cidade}</p>

        <p><strong>Produção:</strong> ${regiao.producao}</p>

        <p><strong>Participação:</strong> ${regiao.participacao}</p>

        <div style="
            width:100%;
            height:15px;
            background:#ddd;
            border-radius:20px;
            margin-top:15px;
        ">
            <div style="
                width:${regiao.participacao.match(/\d+/)[0]}%;
                height:100%;
                background:${regiao.cor};
                border-radius:20px;
            "></div>
        </div>

        `;

        regionButtons.forEach(b => {

            b.style.background = "#2e7d32";

        });

        btn.style.background =
        regiao.cor;

    });

});

/* ==========================
   FAQ
========================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* ==========================
   GALERIA MODAL
========================== */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const imageModal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.querySelector(".close-modal");

if(galleryImages.length){

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            modalImage.src =
            img.src;

            imageModal.classList.add("active");

        });

    });

}

if(closeModal){

    closeModal.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });

}

/* ==========================
   CONTADORES
========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target.toLocaleString("pt-BR");

        }

    };

    updateCounter();

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
".stat-card, .tech-card, .highlight-card, .gallery-item"
)
.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});