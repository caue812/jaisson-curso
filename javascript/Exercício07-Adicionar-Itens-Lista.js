// Criando a lista não ordenada
let lista = document.createElement('ul');

// Criando itens iniciais
let item1 = document.createElement('li');
item1.innerText = 'Item 1';
let item2 = document.createElement('li');
item2.innerText = 'Item 2';
let item3 = document.createElement('li');
item3.innerText = 'Item 3';
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);

// Criando o botão para adicionar um novo item
let botao = document.createElement('button');
botao.innerText = 'Adicionar Novo Item';
botao.onclick = function() {
    let novoItem = document.createElement('li');
    novoItem.innerText = 'Novo Item';
    lista.appendChild(novoItem);
};

// Adicionando a lista e o botão ao corpo da página
document.body.appendChild(lista);
document.body.appendChild(botao);
