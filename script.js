//create button add more than one grid, to fix
//new grid onclick button

const gridButton = document.getElementById('createGrid');
const container = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const gridSizeChoice = document.getElementById('gridSize');

let gridSize = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

gridSizeChoice.addEventListener('click', () => {
    gridSize = window.prompt('Please, choose a grid size. Default is 16*16');
    if (gridSize < 4 || gridSize > 100) return gridSize = 16;
    return gridSize;
})

gridButton.addEventListener('click', () => {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.style.width = `calc(700px / ${gridSize})`;
            newCell.style.height = `calc(700px / ${gridSize})`;
            container.appendChild(newCell);

        }
    }
});


container.addEventListener('mouseover', (e) => {
    let cell = e.target.closest('div');
    
    if (!cell) return;
    if (e.type === 'mouseover' && !mouseDown) return;
    cell.classList.add('black');
})

clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {
        cell.classList.remove('black');
     })
})