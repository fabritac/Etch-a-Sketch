const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const button = document.getElementById("new-grid");
let size = 16;
let colors = [];

function randomColors(numColors) {
    colors = [];
    for (let i = 0; i < numColors; i++) {
	const randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
	colors.push(randomColor);
    }
}

button.onclick = function () {
    let userInput = prompt("Enter the number of squares per side:");

    while (userInput && (isNaN(userInput) || userInput <= 0 || userInput > 100)) {
        userInput = prompt("Invalid input. Please enter a number between 1 and 100:");
    }

    if (userInput) {
        size = parseInt(userInput);
        createGrid();
    }
};

function createGrid() {
    clearGrid();
    defaultGrid();
    addMouseoverListener();
}

function clearGrid() {
    container.innerHTML = ""; 
}

function defaultGrid() {
    makeRows(size);
    makeColumns(size);
}

function makeRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
        }
    }
}

function addMouseoverListener() {
    cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function (event) {
            if (event.buttons === 1) {
                if (this.style.backgroundColor && this.style.backgroundColor !== 'white') {
                    darkenCell(this, 0.1);
                } else {
                    randomColors(1);
                    this.style.backgroundColor = colors[0];
                }
            }
        });
    }
}

function darkenCell(cell, factor) {
    const currentColor = cell.style.backgroundColor;
    
    if (currentColor && currentColor !== 'white') {
        const rgbValues = currentColor.match(/\d+/g).map(Number);

        const newColor = `rgb(${rgbValues.map(value => Math.round(value * (1 - factor))).join(', ')})`;

        cell.style.backgroundColor = newColor;
    }
}


createGrid();
