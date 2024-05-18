let text = document.getElementById ('text');
let estatuaEsquerda = document.getElementById('estatua-esquerda')
let estatuaDireita = document.getElementById('estatua-direita')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    estatuaEsquerda.style.left = value * -1.5 + 'px';
    estatuaDireita.style.left = value * 1.5 + 'px';
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
