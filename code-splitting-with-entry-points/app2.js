import React from "react";
import ReactDOM from "react-dom";
import printLoaded from './components/a';

console.log(React);
console.log(ReactDOM);
console.log(printLoaded);

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'app2 loaded';
    return element;
}

document.body.appendChild(component());