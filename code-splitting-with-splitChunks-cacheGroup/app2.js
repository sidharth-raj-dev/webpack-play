import { createStore } from 'redux';

console.log(createStore);

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'app2 loaded';
    return element;
}

document.body.appendChild(component());