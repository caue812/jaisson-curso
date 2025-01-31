// Criando a imagem
let imagem = document.createElement('img');
imagem.setAttribute('src', 'https://via.placeholder.com/150');
document.body.appendChild(imagem);

// Criando o botão para mudar a imagem
let botao = document.createElement('button');
botao.innerText = 'Trocar Imagem';
botao.onclick = function() {
    imagem.setAttribute('src', 'https://via.placeholder.com/200');
};

// Adicionando o botão ao corpo da página
document.body.appendChild(botao);
