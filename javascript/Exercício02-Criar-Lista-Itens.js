// Criando a lista ordenada
let lista = document.createElement('ol');

// Criando os itens da lista
let item1 = document.createElement('li');
item1.innerText = 'Estudar JavaScript';
let item2 = document.createElement('li');
item2.innerText = 'Praticar CSS';
let item3 = document.createElement('li');
item3.innerText = 'Fazer exercícios';

// Adicionando os itens à lista
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);

// Adicionando a lista ao corpo da página
document.body.appendChild(lista);
