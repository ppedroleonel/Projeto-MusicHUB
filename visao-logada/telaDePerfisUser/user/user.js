const botaoMenu = document.getElementById('menu');
const navegacao = document.querySelector('.navegacao');
 
if (botaoMenu && navegacao) {
    botaoMenu.setAttribute('aria-expanded', 'false');
 
    function fecharMenu() {
        navegacao.classList.remove('ativo');
        botaoMenu.setAttribute('aria-expanded', 'false');
    }
 
    // abre/fecha ao clicar no botão
    botaoMenu.addEventListener('click', () => {
        const aberto = navegacao.classList.toggle('ativo');
        botaoMenu.setAttribute('aria-expanded', String(aberto));
    });
 
    // fecha ao clicar em um link do menu
    navegacao.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', fecharMenu);
    });
 
    // fecha se a tela voltar para o tamanho de desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) fecharMenu();
    });
}