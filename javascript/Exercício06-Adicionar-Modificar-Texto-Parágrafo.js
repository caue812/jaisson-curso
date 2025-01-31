// Criando o parágrafo com texto inicial
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique no botão abaixo para mudar este texto!';

// Criando o botão para modificar o texto
let botao = document.createElement('button');
botao.innerText = 'Alterar Texto';
botao.onclick = function() {
    paragrafo.innerText = 'Texto alterado com sucesso!';
};

// Adicionando o parágrafo e o botão ao corpo da página
document.body.appendChild(paragrafo);
document.body.appendChild(botao);
