// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
const para = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const divPara = document.createElement('p');

para.style.color = 'red';
h3.style.color = 'blue';
div.style.cssText = 'border: black, solid; background: pink;';

content.classList.add('content');

content.textContent = 'This is the glorious text-content!';
para.textContent = 'Hey I\'m red!';
h3.textContent = 'I\'m a blue h3!';
h1.textContent = 'I\'m in a div!';
divPara.textContent = 'ME TOO!';

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);

div.appendChild(h1);
div.appendChild(divPara);
