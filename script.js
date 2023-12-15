document.addEventListener("click", () => {

})
const changeSize = () => {
    while (true) {
        input = prompt("Input new size between 1 and 100 inclusive. This will delete any drawings.");
        input = parseInt(input);
        if (input != NaN && input > 0 && input <= 100) {
            break;
        }
    }
}

const createGrid = (size) => {
    const container = document.querySelector("#container");
    let row;
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.style.cssText = "flex-grow: 1; display: flex; align-content: stretch;"
        for (let i = 0; i < size; i++) {
            let segment = document.createElement('div');
            segment.style.flexGrow = '1';
            segment.addEventListener("mouseover", () => {
                segment.style.backgroundColor = "black";
            })
            row.appendChild(segment);
        }
        container.appendChild(row);
    }
}

const deleteGrid = () => {
    
}

createGrid(64);