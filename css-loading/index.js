import './style.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'css loading';
    element.classList.add('comp');
    return element;
}

document.body.appendChild(component());