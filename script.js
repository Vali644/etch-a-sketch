const createGrid = (size) => {
    const container = document.querySelector("#container");
    let row;
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.style.cssText = "flex-grow: 1; display: flex; align-content: stretch;"
        for (let i = 0; i < size; i++) {
            let segment = document.createElement('div');
            segment.style.flexGrow = '1';
            let s = segment;
            segment.addEventListener("mouseover", () => {
                segment.style.backgroundColor = "black";
            })
            row.appendChild(segment);
        }
        container.appendChild(row);
    }
}
createGrid(2);