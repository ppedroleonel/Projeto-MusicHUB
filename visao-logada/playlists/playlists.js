document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('.secao-playlists');

    secoes.forEach(secao => {
        const carrossel = secao.querySelector('.carrossel-playlists');
        const btnPrev = secao.querySelector('.btn-prev');
        const btnNext = secao.querySelector('.btn-next');

        if (!carrossel) return;

        if (btnNext) {
            btnNext.addEventListener('click', () => {
                const larguraVisivel = carrossel.clientWidth;
                carrossel.scrollBy({ left: larguraVisivel * 0.75, behavior: 'smooth' });
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                const larguraVisivel = carrossel.clientWidth;
                carrossel.scrollBy({ left: -larguraVisivel * 0.75, behavior: 'smooth' });
            });
        }
        //IMPLEMENTAÇÃO DE DRAG
        let estaPressionado = false;
        let startX;
        let scrollLeft;

        carrossel.addEventListener('mousedown', (e) => {
            estaPressionado = true;
            startX = e.pageX - carrossel.offsetLeft;
            scrollLeft = carrossel.scrollLeft;
        });

        carrossel.addEventListener('mouseleave', () => {
            estaPressionado = false;
        });

        carrossel.addEventListener('mouseup', () => {
            estaPressionado = false;
        });

        carrossel.addEventListener('mousemove', (e) => {
            if (!estaPressionado) return;
            e.preventDefault();
            const x = e.pageX - carrossel.offsetLeft;
            const caminhado = (x - startX) * 2; //VELOCIDADE DE SCROLL
            carrossel.scrollLeft = scrollLeft - caminhado;
        });
    });
});