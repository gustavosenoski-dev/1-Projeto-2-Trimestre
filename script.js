/* ==========================
   AGROFORTE PARANÁ 2026
========================== */

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(() => {
            loader.classList.add("hide");
        }, 800);
    }

});

/* DARK MODE */

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
            ? "dark"
            : "light"
        );

    });

}

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

}

/* AUMENTAR E DIMINUIR FONTE */

let currentFontSize = 100;

const increaseBtn = document.getElementById("fontIncrease");
const decreaseBtn = document.getElementById("fontDecrease");

if(increaseBtn){

    increaseBtn.addEventListener("click", () => {

        if(currentFontSize < 140){

            currentFontSize += 10;

            document.body.style.fontSize =
            currentFontSize + "%";

        }

    });

}

if(decreaseBtn){

    decreaseBtn.addEventListener("click", () => {

        if(currentFontSize > 80){

            currentFontSize -= 10;

            document.body.style.fontSize =
            currentFontSize + "%";

        }

    });

}

/* ALTO CONTRASTE */

const contrastToggle =
document.getElementById("contrastToggle");

if(contrastToggle){

    contrastToggle.addEventListener("click", () => {

        document.body.classList.toggle("contrast");

    });

}

/* MENU MOBILE */

const menuBtn =
document.querySelector(".menu-mobile");

const nav =
document.querySelector(".nav");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

document.querySelectorAll(".nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/* CONTADORES */

const counters =
document.querySelectorAll(".counter");

const animateCounters = () => {

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(
                animateCounters,
                20
            );

        }else{

            counter.innerText =
            target.toLocaleString("pt-BR");

        }

    });

};

const counterSection =
document.getElementById("indicadores");

let countersStarted = false;

window.addEventListener("scroll", () => {

    if(
        counterSection &&
        !countersStarted &&
        window.scrollY >
        counterSection.offsetTop - 400
    ){

        countersStarted = true;

        animateCounters();

    }

});

/* FAQ */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* BOTÃO VOLTAR AO TOPO */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/* MODAL DA GALERIA */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const modal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.querySelector(".close-modal");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        modal.classList.add("active");

        modalImage.src = img.src;

    });

});

if(closeModal){

    closeModal.addEventListener("click", () => {

        modal.classList.remove("active");

    });

}

if(modal){

    modal.addEventListener("click", e => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

}

/* MAPA INTERATIVO */

const mapInfo =
document.getElementById("mapInfo");

const regionButtons =
document.querySelectorAll("[data-region]");

const regions = {

    oeste: {
        titulo: "Oeste do Paraná",
        texto: "Grande produção de soja, milho e aves."
    },

    norte: {
        titulo: "Norte do Paraná",
        texto: "Referência em agricultura moderna."
    },

    sul: {
        titulo: "Sul do Paraná",
        texto: "Produção diversificada e sustentável."
    },

    centro: {
        titulo: "Centro-Sul",
        texto: "Destaque para grãos e pecuária."
    }

};

regionButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const region =
        regions[btn.dataset.region];

        mapInfo.innerHTML = `

            <h3>${region.titulo}</h3>

            <p>${region.texto}</p>

            <div class="map-buttons">
                ${document.querySelector(".map-buttons").innerHTML}
            </div>

        `;

        location.reload;

    });

});

/* ANIMAÇÕES AO ROLAR */

const animatedElements =
document.querySelectorAll(
".stat-card, .tech-card, .gallery-item, .highlight-card, .timeline-item"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* HEADER SOMBRA */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow =
        "none";

    }

});

/* ANO AUTOMÁTICO NO FOOTER */

const yearSpan =
document.getElementById("currentYear");

if(yearSpan){

    yearSpan.textContent =
    new Date().getFullYear();

}

/* FIM */