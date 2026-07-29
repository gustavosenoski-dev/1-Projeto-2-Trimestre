// =====================================
// PORTAL DE ESCUTA - SIMULAÇÃO
// =====================================


const formulario = document.getElementById("formEscuta");


const resposta = document.getElementById("resposta");



if(formulario){


    formulario.addEventListener("submit", function(event){


        // Impede envio real do formulário

        event.preventDefault();



        const nome = document.getElementById("nome").value;



        let mensagemNome = "";



        if(nome.trim() !== ""){

            mensagemNome = ` ${nome},`;

        }



        resposta.innerHTML = `

            <div class="mensagem-acolhimento">

                <i class="fa-solid fa-heart"></i>

                <h3>
                    Obrigado por compartilhar${mensagemNome}
                </h3>


                <p>

                    Sua mensagem foi recebida como parte desta
                    simulação educativa.

                    Nenhuma informação foi enviada ou armazenada.

                </p>


                <p>

                    Lembre-se: você merece respeito e apoio.

                    Caso esteja passando por uma situação difícil,
                    procure um professor, a coordenação da escola,
                    familiares ou outro adulto de confiança.

                </p>


            </div>

        `;



        // limpa o formulário

        formulario.reset();



        // leva o usuário até a mensagem

        resposta.scrollIntoView({

            behavior:"smooth"

        });



    });


}