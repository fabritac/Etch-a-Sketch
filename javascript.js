const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const button = document.getElementById("new-grid");
let size = 16;

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
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
        }
    }
}

function addMouseoverListener() {
    cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('mouseover', function(event) {
	    if (event.buttons === 1) {
		this.style.backgroundColor = 'black';
	    }
	});
    }
}

createGrid();
