// Criando o formulário
let formulario = document.createElement('form');

// Criando o campo de nome
let nomeInput = document.createElement('input');
nomeInput.type = 'text';
nomeInput.placeholder = 'Nome';
formulario.appendChild(nomeInput);

// Criando o campo de e-mail
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'E-mail';
formulario.appendChild(emailInput);

// Criando o botão de envio
let botaoEnviar = document.createElement('button');
botaoEnviar.innerText = 'Enviar';
formulario.appendChild(botaoEnviar);

// Adicionando o formulário ao corpo da página
document.body.appendChild(formulario);
