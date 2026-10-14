// PERFIL BTN
const botaoPerfil = document.getElementById('botao-perfil');
const menuPerfil  = document.getElementById('menu-perfil');

function abrirMenu() {
    menuPerfil.hidden = false;
    // espera 1 frame para a transição de opacidade funcionar
    requestAnimationFrame(() => menuPerfil.classList.add('aberto'));
    botaoPerfil.setAttribute('aria-expanded', 'true');
}

function fecharMenu() {
    menuPerfil.classList.remove('aberto');
    botaoPerfil.setAttribute('aria-expanded', 'false');
    // só esconde de vez depois da animação terminar
    setTimeout(() => {
        if (!menuPerfil.classList.contains('aberto')) menuPerfil.hidden = true;
    }, 200);
}

botaoPerfil.addEventListener('click', (e) => {
    e.stopPropagation();
    menuPerfil.classList.contains('aberto') ? fecharMenu() : abrirMenu();
});

// Clicar fora fecha
document.addEventListener('click', (e) => {
    if (!menuPerfil.contains(e.target)) fecharMenu();
});

// Esc fecha
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharMenu();
});

// CARDS
document.querySelectorAll('.carrossel-container').forEach((carrossel) => {
    let apertado = false;
    let arrastou = false;
    let inicioX = 0;
    let scrollInicial = 0;

    const LIMITE = 5; // px de movimento para considerar que é um arrasto

    carrossel.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return; // no touch o scroll nativo já funciona
        apertado = true;
        arrastou = false;
        inicioX = e.clientX;
        scrollInicial = carrossel.scrollLeft;
    });

    window.addEventListener('pointermove', (e) => {
        if (!apertado) return;
        const deslocamento = e.clientX - inicioX;

        if (!arrastou && Math.abs(deslocamento) > LIMITE) {
            arrastou = true;
            carrossel.classList.add('arrastando');
        }
        if (arrastou) {
            carrossel.scrollLeft = scrollInicial - deslocamento;
        }
    });

    const soltar = () => {
        if (!apertado) return;
        apertado = false;
        carrossel.classList.remove('arrastando');
    };
    window.addEventListener('pointerup', soltar);
    window.addEventListener('pointercancel', soltar);

    // Se arrastou, cancela o clique (evita abrir link sem querer)
    carrossel.addEventListener('click', (e) => {
        if (arrastou) {
            e.preventDefault();
            e.stopPropagation();
            arrastou = false;
        }
    }, true);

    // Bloqueia o "arrastar imagem" nativo do navegador
    carrossel.addEventListener('dragstart', (e) => e.preventDefault());
});