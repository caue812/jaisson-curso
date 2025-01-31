// Criando o parágrafo
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Este é um parágrafo que será mostrado e escondido';

// Criando os botões para mostrar e esconder
let botaoMostrar = document.createElement('button');
botaoMostrar.innerText = 'Mostrar';
botaoMostrar.onclick = function() {
    paragrafo.style.display = 'block';
};

let botaoEsconder = document.createElement('button');
botaoEsconder.innerText = 'Esconder';
botaoEsconder.onclick = function() {
    paragrafo.style.display = 'none';
};

// Adicionando o parágrafo e os botões ao corpo da página
document.body.appendChild(paragrafo);
document.body.appendChild(botaoMostrar);
document.body.appendChild(botaoEsconder);
