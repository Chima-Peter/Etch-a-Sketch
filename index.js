const etchContainer = document.querySelector('#etchContainer');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const cleanerBtn = document.querySelector('#cleanerBtn')

// nodes created in dom
const mainContainer = document.createElement('div');


// Creating the default sketch board
mainContainer.classList.add('mainContainer');
for (let row = 0; row < 32; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (let column = 0; column < 32;column++) {
        const colContainer = document.createElement('div');
        colContainer.setAttribute('id', 'colContainer');
        colContainer.classList.add('colContainer');
        rowContainer.appendChild(colContainer)
    };
    mainContainer.appendChild(rowContainer);
};
etchContainer.appendChild(mainContainer);

colorBtn.addEventListener('click', () => {
    const colorInput = document.querySelector('#colorInput').value;
    hoverOnBox(colorInput);
});

rainbowBtn.addEventListener('click', () => {
    randomHoverOnBox();
});

eraserBtn.addEventListener('click', () => {
    hoverOnBox('white');
});



function hoverOnBox(colorChoice) {
    const boxes = document.querySelectorAll('#colContainer');
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorChoice;
        });
    });
};

function randomHoverOnBox() {
    const boxes = document.querySelectorAll('#colContainer');
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColor = "#" + randomColor;
            box.style.backgroundColor = randomColor;
        });
    });
};