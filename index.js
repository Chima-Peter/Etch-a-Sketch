const etchContainer = document.querySelector('#etchContainer');
const colorBtn = document.querySelector('#colorBtn');
// nodes created in dom
const mainContainer = document.createElement('div');


// Creating the default sketch board
mainContainer.classList.add('mainContainer');
for (let row = 0; row < 5; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (let column = 0; column < 5;column++) {
        const colContainer = document.createElement('div');
        colContainer.setAttribute('id', 'colContainer');
        colContainer.classList.add('colContainer');
        rowContainer.appendChild(colContainer)
    }
    mainContainer.appendChild(rowContainer);
}
etchContainer.appendChild(mainContainer);



// Cause the color mode to call hover function
colorBtn.addEventListener('click', () => {
    const colorInput = document.querySelector('#colorInput').value;
    alert(colorInput)
    hoverOnBox(colorInput);
})




function hoverOnBox(colorChoice) {
    const boxes = document.querySelectorAll('#colContainer');
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorChoice;
        });
    });
}
