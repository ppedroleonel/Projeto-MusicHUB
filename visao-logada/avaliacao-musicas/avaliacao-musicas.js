const modalAvaliar = document.querySelector("#pop-up-avaliar");
const btnAvaliar = document.querySelector(".btn-avaliar");
const btnFechar = document.querySelector(".fa-xmark");

    btnAvaliar.addEventListener("click", () => {
        modalAvaliar.showModal();
    });


    btnFechar.addEventListener("click", () => {
        modalAvaliar.close();
    }) 
