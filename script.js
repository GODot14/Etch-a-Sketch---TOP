//create button add more than one grid, to fix
//new grid onclick button

const gridButton = document.getElementById('createGrid');
const container = document.querySelector('.grid');


gridButton.addEventListener('click', () => {
    let gridSize = 16;
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

container.addEventListener('mousedown', (e) => {
    let cell = e.target.closest('div');

    if (!cell) return;

    cell.classList.add('black');
})