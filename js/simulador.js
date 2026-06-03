function calcular(){

let total = 0;

const marcados =
document.querySelectorAll(
'input[type="checkbox"]:checked'
);

marcados.forEach(item => {
total += Number(item.value);
});

let nivel = "";

if(total <= 20){
nivel = "🌱 Iniciante Verde";
}
else if(total <= 50){
nivel = "🌿 Produtor Consciente";
}
else if(total <= 90){
nivel = "🌳 Guardião da Natureza";
}
else{
nivel = "🏆 Mestre da Sustentabilidade";
}

document.getElementById(
"resultadoSimulador"
).innerHTML =

`
Pontuação: ${total}%<br><br>
Classificação: ${nivel}
`;
}