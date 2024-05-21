let text = document.getElementById ('text');
let estatuaEsquerda = document.getElementById('estatua-esquerda')
let estatuaDireita = document.getElementById('estatua-direita')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    estatuaEsquerda.style.left = value * -1.5 + 'px';
    estatuaDireita.style.left = value * 1.5 + 'px';
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
},5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }


document.getElementById("radio"+count).checked = true;

}