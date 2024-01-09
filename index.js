const etchContainer = document.querySelector('#etchContainer');


// nodes created in dom
const mainContainer = document.createElement('div');


// Creating the default sketch board
mainContainer.classList.add('mainContainer');
for (let row = 0; row < 5; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (let column = 0; column < 5;column++) {
        const colContainer = document.createElement('div');
        colContainer.classList.add('colContainer');
        rowContainer.appendChild(colContainer)
    }
    mainContainer.appendChild(rowContainer);
}
etchContainer.appendChild(mainContainer);
