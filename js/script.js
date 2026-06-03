let contador = 0;

function plantarArvore(){

contador++;

document.getElementById("arvores")
.innerText = contador;
}

const darkMode =
document.getElementById("darkMode");

if(darkMode){

darkMode.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
}