let inputData = document.querySelector('input');
let ul = document.querySelector('ul');
let addButton = document.querySelector('button');

console.log('abc')

addButton.addEventListener('click',()=>{

let li = document.createElement('li');
// let span = document.createElement('span');
let content = inputData.value;
inputData.value='';

let button = document.createElement('button');

// li.appendChild(span);
li.textContent=content;
li.appendChild(button);
button.textContent='Delete';
ul.appendChild(li);

button.addEventListener('click',()=>{
    li.remove();
});
inputData.focus();
})