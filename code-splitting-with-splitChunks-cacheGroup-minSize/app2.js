import React from 'react';
import ReactDOM from 'react-dom';
import printLoaded from './components/a';

console.log(React);
console.log(ReactDOM);

console.log('loading app2...')


function component(callback) {
    const element = document.createElement('div');
    element.innerHTML = 'app2 loaded';
    callback('app2 component');
    return element;
}

document.body.appendChild(component(printLoaded));
