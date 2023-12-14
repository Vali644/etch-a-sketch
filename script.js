const createGrid = (size) => {
    const container = document.querySelector("#container");
    let row;
    let segment;
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.style.cssText = "flex-grow: 1; display: flex; align-content: stretch;"
        for (let i = 0; i < size; i++) {
            segment = document.createElement('div');
            segment.style.flexGrow = '1';
            row.appendChild(segment);
        }
        container.appendChild(row);
    }
}
createGrid(16);