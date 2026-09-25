const campoSenha = document.getElementById("senha");            // pega so o ID
const btnSenha = document.querySelector("#mostrar-senha");          // pega tanto class tanto ID


// ISSO AI TA ESPERANDO ALGUM CLIQUE ACONTECER e quando o clique ocorre ele chama uma função
btnSenha.addEventListener("click", function () {
    /* if (campoSenha.type == "password") 
     {    
         campoSenha.type = "text";
     }
     else {
         campoSenha.type = "password";
     }*/

    // o tipo do campoSenha é um password, se sim recebe texto se nao recebe password.
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";

}
)

const campoConfirmarSenha = document.getElementById("confirmar-senha");
const formLogin = document.querySelector("login");
const erroSenha = document.getElementById("erro-senha");



formLogin.addEventListener("submit", (e) => {
    if(campoSenha.value != campoConfirmarSenha)
    {
        e.preventDefault();
        erroSenha.hidden = false;
    }
    else
    {
        erroSenha.hidden = true;
    }
})

