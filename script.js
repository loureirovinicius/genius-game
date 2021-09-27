let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');

// Cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende uma nova cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Verifica se os botões apertados são os mesmos dados pela ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// Clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return red;
    } else if(color == 1) {
        return green;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let lose = () => {
    alert(`Você perdeu o jogo.\nPontuação: ${score}!\nClique em OK para tentar novamente`);
    order = [];
    clickedOrder = [];

    playGame();
}

const playGame = () => {
    alert('Bem vindo ao Genius!');
    score = 0;

    nextLevel();
}

red.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Inicia o jogo
playGame()