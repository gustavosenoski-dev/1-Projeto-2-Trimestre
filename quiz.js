// =====================================
// QUIZ DE SAÚDE EMOCIONAL
// =====================================


const quiz = document.getElementById("quizForm");

const resultado = document.getElementById("resultado");



if(quiz){


    quiz.addEventListener("submit", function(event){


        event.preventDefault();



        let pontos = 0;



        // Respostas corretas

        const respostas = {

            q1:"b",

            q2:"b",

            q3:"a",

            q4:"b",

            q5:"a"

        };



        // Verificação das respostas

        for(let pergunta in respostas){


            const respostaSelecionada =
            document.querySelector(
                `input[name="${pergunta}"]:checked`
            );



            if(respostaSelecionada){


                if(respostaSelecionada.value === respostas[pergunta]){

                    pontos++;

                }


            }


        }




        let mensagem = "";

        let cor = "";



        if(pontos === 5){


            mensagem =
            "Excelente! Você demonstrou bastante conhecimento sobre saúde emocional. Continue cuidando de você! 💙";


            cor="#4CAF50";


        }else if(pontos >= 3){


            mensagem =
            "Muito bem! Você conhece atitudes importantes para cuidar da saúde emocional. 🌱";


            cor="#1565C0";


        }else{


            mensagem =
            "Continue aprendendo! Buscar informações e conversar sobre sentimentos também faz parte do cuidado emocional. 💙";


            cor="#FF9800";


        }





        resultado.innerHTML = `


            <div class="resultado-box" style="border-color:${cor}">


                <i class="fa-solid fa-star"></i>


                <h2>
                    Resultado
                </h2>


                <h3>
                    Você acertou ${pontos} de 5 perguntas!
                </h3>


                <p>
                    ${mensagem}
                </p>


            </div>


        `;



        resultado.scrollIntoView({

            behavior:"smooth"

        });



    });


}