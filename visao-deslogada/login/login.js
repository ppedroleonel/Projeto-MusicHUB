const campoSenha = document.getElementById("senha");            // pega so o ID
const btnSenha = document.querySelector("#mostrar-senha");          // pega tanto class tanto ID


// ISSO AI TA ESPERANDO ALGUM CLIQUE ACONTECER e quando o clique ocorre ele chama uma função
btnSenha.addEventListener("click", function () 
  {
   /* if (campoSenha.type == "password") 
    {    
        campoSenha.type = "text";
    }
    else {
        campoSenha.type = "password";
    }*/

        // o tipo do campoSenha é um password, se sim recebe texto se nao recebe password.
    const mostrar = campoSenha.type === "password"
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
    btnSenha.classList.toggle("visivel", mostrar);
  }
)

const menu = document.getElementById("menu");
const navegacao = document.querySelector(".navegacao");
const cabecalho = document.querySelector(".cabecalho");

menu.addEventListener("click", () => {
    navegacao.classList.toggle("ativo");
    cabecalho.classList.toggle("remover-border-cabecalho")
});