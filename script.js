let text = document.getElementById ('text');
let estatuaEsquerda = document.getElementById('estatua-esquerda')
let estatuaDireita = document.getElementById('estatua-direita')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    estatuaEsquerda.style.left = value * -1.5 + 'px';
    estatuaDireita.style.left = value * 1.5 + 'px';
});