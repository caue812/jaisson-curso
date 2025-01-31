// Criando o div com a classe 'box'
let div = document.createElement('div');
div.classList.add('box');
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'red';

// Criando o botão para alterar a cor
let botao = document.createElement('button');
botao.innerText = 'Alterar Cor';
botao.onclick = function() {
    div.style.backgroundColor = 'blue';
};

// Adicionando a div e o botão ao corpo da página
document.body.appendChild(div);
document.body.appendChild(botao);
