
const btnNext = document.getElementById('btn-avancar');
const btnBack = document.getElementById('btn-volta');
const cards = document.querySelectorAll('.cartao');
let cardAtual = 0;

function hideCardSelecion(){
    const cardSeleciont = document.querySelector(".selecionado");
    cardSeleciont.classList.remove('selecionado')
}

function showCard(indexCard){
    cards[indexCard].classList.add('selecionado');
}

btnNext.addEventListener('click', function(){
    // console.log("cartão atual", cardAtual)
    // console.log("cartões", cards.length -1)
    if(cardAtual === cards.length -1 ) return;
    hideCardSelecion();
    cardAtual ++;
    showCard(cardAtual)
})

btnBack.addEventListener('click', function(){
    if(cardAtual === 0 ) return;
    hideCardSelecion();
    cardAtual --;
    showCard(cardAtual)
})