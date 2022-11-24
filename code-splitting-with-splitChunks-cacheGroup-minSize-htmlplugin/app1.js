import React from 'react'

console.log(React);

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'app1 loaded';
    return element;
}

document.body.appendChild(component());