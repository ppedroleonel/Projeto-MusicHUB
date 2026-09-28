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