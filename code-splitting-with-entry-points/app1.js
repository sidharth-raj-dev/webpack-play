import React from "react";
import ReactDOM from "react-dom";

console.log(React);
console.log(ReactDOM);

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'app1 loaded';
    return element;
}

document.body.appendChild(component());