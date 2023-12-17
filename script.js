document.getElementById("size").addEventListener("click", () => {
    deleteGrid();
    changeSize();
})
const changeSize = () => {
    while (true) {
        input = prompt("Input new size between 1 and 100 inclusive. This will delete any drawings.");
        input = parseInt(input);
        if (input != NaN && input > 0 && input <= 100) {
            break;
        }
    }
    createGrid(input);
}

const createGrid = (size) => {
    const container = document.querySelector("#container");
    let row;
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.style.cssText = "flex-grow: 1; display: flex; align-content: stretch;"
        row.classList.add("row");
        for (let i = 0; i < size; i++) {
            let segment = document.createElement('div');
            segment.style.flexGrow = '1';
            let percent = [0.0, 0.0, 0.0];
            let rgbValues = [0, 0, 0];
            segment.style.backgroundColor = 'rgb(255, 255, 255)';
            segment.addEventListener("mouseover", () => {
                if (window.getComputedStyle(segment, null).getPropertyValue("background-color") == 'rgb(255, 255, 255)') {
                    rgbValues[0] = Math.floor(Math.random() * 256);
                    rgbValues[1] = Math.floor(Math.random() * 256);
                    rgbValues[2] = Math.floor(Math.random() * 256);
                    percent[0] = rgbValues[0] / 10;
                    percent[1] = rgbValues[1] / 10;
                    percent[2] = rgbValues[2] / 10;
                    segment.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
                } else if (window.getComputedStyle(segment, null).getPropertyValue("background-color") != 'rgb(0, 0, 0)') {
                    rgbValues[0] -= percent[0];
                    rgbValues[1] -= percent[1];
                    rgbValues[2] -= percent[2];
                    segment.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
                }
            })
            row.appendChild(segment);
        }
        container.appendChild(row);
    }
}

const deleteGrid = () => {
    nodesToDelete = document.querySelectorAll(".row");
    nodesToDelete.forEach((toDelete) => toDelete.remove());
}

createGrid(64);