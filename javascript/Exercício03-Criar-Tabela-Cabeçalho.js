// Criando a tabela
let tabela = document.createElement('table');

// Criando o cabeçalho
let cabecalho = document.createElement('tr');
let th1 = document.createElement('th');
th1.innerText = 'Nome';
let th2 = document.createElement('th');
th2.innerText = 'Idade';
let th3 = document.createElement('th');
th3.innerText = 'Profissão';
cabecalho.appendChild(th1);
cabecalho.appendChild(th2);
cabecalho.appendChild(th3);

// Criando a linha de dados
let linha = document.createElement('tr');
let td1 = document.createElement('td');
td1.innerText = 'João';
let td2 = document.createElement('td');
td2.innerText = '25';
let td3 = document.createElement('td');
td3.innerText = 'Desenvolvedor';
linha.appendChild(td1);
linha.appendChild(td2);
linha.appendChild(td3);

// Adicionando o cabeçalho e a linha de dados à tabela
tabela.appendChild(cabecalho);
tabela.appendChild(linha);

// Adicionando a tabela ao corpo da página
document.body.appendChild(tabela);
