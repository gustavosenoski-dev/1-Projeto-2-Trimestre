// ==================================
// MODO ESCURO
// ==================================

const darkButton = document.getElementById("darkMode");


darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    // troca o ícone do botão

    if(document.body.classList.contains("dark")){

        darkButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        darkButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});



// ==================================
// BOTÃO VOLTAR AO TOPO
// ==================================

const btnTopo = document.getElementById("btnTopo");


window.addEventListener("scroll", () => {


    if(window.scrollY > 300){

        btnTopo.style.display = "block";

    }else{

        btnTopo.style.display = "none";

    }


});



btnTopo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



// ==================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==================================


const elementos = document.querySelectorAll(
    ".card, .help, .beneficios-grid div"
);



function aparecerElemento(){


    elementos.forEach(elemento=>{


        const altura = elemento.getBoundingClientRect().top;


        if(altura < window.innerHeight - 100){

            elemento.style.opacity="1";

            elemento.style.transform="translateY(0)";

        }


    });


}



window.addEventListener(
    "scroll",
    aparecerElemento
);


aparecerElemento();



// ==================================
// CONTROLE DE FONTE
// ==================================


let tamanhoFonte = 100;



function aumentarFonte(){


    if(tamanhoFonte < 130){

        tamanhoFonte += 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    }


}



function diminuirFonte(){


    if(tamanhoFonte > 80){

        tamanhoFonte -= 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    }


}



// ==================================
// ALTO CONTRASTE
// ==================================


function altoContraste(){


    document.body.classList.toggle(
        "contraste"
    );


}



// ==================================
// MENU MOBILE
// ==================================


const links = document.querySelectorAll("nav a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        window.scroll({

            behavior:"smooth"

        });


    });


});



// ==================================
// MENSAGEM DE BOAS-VINDAS
// ==================================


window.addEventListener(
"load",
()=>{


console.log(
"Portal de Apoio ao Estudante carregado com sucesso!"
);


});