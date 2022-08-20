// - створити блок,
let block = document.createElement(`div`);

//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('collapse','alpha','beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'silver';
block.style.color = 'white';
block.style.fontSize = '20px';

// - додати цей блок в body.
document.body.append(block)

// - клонувати його повністю, та додати клон в body.
document.body.append(block.cloneNode(true))


