
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');


titulo.innerText = 'Título do Projeto';
link.innerText = 'Acesse o site da Proz Educação';

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
    <li><a href="https://www.openai.com" target="_blank">OpenAI</a></li>
`;
