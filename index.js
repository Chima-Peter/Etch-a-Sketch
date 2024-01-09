const etchContainer = document.querySelector('#etchContainer');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const cleanerBtn = document.querySelector('#cleanerBtn')
const numberOfBoxes = document.querySelector('#setBoxCount');

// nodes created in dom
const mainContainer = document.createElement('div');

mainContainer.classList.add('mainContainer');
for (let row = 0; row < 16; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    rowContainer.classList.add('rowContainer');
    for (let column = 0; column < 16; column++) {
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

cleanerBtn.addEventListener('click', () => {
    cleanBoxes();
});

numberOfBoxes.addEventListener('click', () => {
    const userInput = prompt('Enter size of grid. It must be within 1 to 100.')
    createGrid(userInput);
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

function cleanBoxes() {
    const boxes = document.querySelectorAll('#colContainer');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
};

function createGrid(input = 16) {
    cleanBoxes()
    for (let row = 0; row < 16; row++) {
        const rowContainer = document.querySelector('#rowContainer');
        for (let column = 0; column < 16;column++) {
            colContainer = document.querySelector("#colContainer");
            rowContainer.removeChild(colContainer);
        };
        mainContainer.removeChild(rowContainer);
    }
    etchContainer.removeChild(mainContainer);

    const mainContainer = document.createElement('div');
    if ((input > 0) && (input < 101)) {
        mainContainer.classList.add('mainContainer');
        for (let row = 0; row < input; row++) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('rowContainer');
            rowContainer.setAttribute('id', 'rowContainer');
            for (let column = 0; column < input;column++) {
                const colContainer = document.createElement('div');
                colContainer.setAttribute('id', 'colContainer');
                colContainer.classList.add('colContainer');
            rowContainer.appendChild(colContainer)
            };
            mainContainer.appendChild(rowContainer);
        };
        etchContainer.appendChild(mainContainer);
        };
};