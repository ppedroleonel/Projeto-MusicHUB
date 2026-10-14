const busca       = document.getElementById('busca');
const botaoBusca  = document.getElementById('botao-busca');
const campoBusca  = document.getElementById('busca-input');

function abrirBusca() {
    busca.classList.add('aberta');
    botaoBusca.setAttribute('aria-expanded', 'true');
    // espera a animação começar para o foco não "pular" a tela
    setTimeout(() => campoBusca.focus(), 150);
}

function fecharBusca() {
    busca.classList.remove('aberta');
    botaoBusca.setAttribute('aria-expanded', 'false');
    campoBusca.blur();
}

botaoBusca.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!busca.classList.contains('aberta')) {
        abrirBusca();
    } else if (campoBusca.value.trim() !== '') {
        // barra aberta + texto digitado: faz a busca
        window.location.href = `../busca/busca.html?q=${encodeURIComponent(campoBusca.value.trim())}`;
    } else {
        fecharBusca();
    }
});

// Enter também busca
campoBusca.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && campoBusca.value.trim() !== '') {
        window.location.href = `../busca/busca.html?q=${encodeURIComponent(campoBusca.value.trim())}`;
    }
    if (e.key === 'Escape') fecharBusca();
});

// Clicar fora fecha (só se estiver vazio)
document.addEventListener('click', (e) => {
    if (!busca.contains(e.target) && campoBusca.value.trim() === '') fecharBusca();
});