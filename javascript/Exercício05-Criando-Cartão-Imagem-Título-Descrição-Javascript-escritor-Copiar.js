// Criando o cartão (div)
let cartao = document.createElement('div');

// Criando a imagem
let imagem = document.createElement('img');
imagem.setAttribute('src', 'https://via.placeholder.com/150');
cartao.appendChild(imagem);

// Criando o título
let titulo = document.createElement('h3');
titulo.innerText = 'Título do Cartão';
cartao.appendChild(titulo);

// Criando a descrição
let descricao = document.createElement('p');
descricao.innerText = 'Este é um exemplo de cartão criado dinamicamente com JavaScript.';
cartao.appendChild(descricao);

// Adicionando o cartão ao corpo da página
document.body.appendChild(cartao);
