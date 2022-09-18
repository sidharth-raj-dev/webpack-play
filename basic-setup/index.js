function component() {
    const element = document.createElement('div');
    element.innerHTML = 'text';
    return element;
}

document.body.appendChild(component());