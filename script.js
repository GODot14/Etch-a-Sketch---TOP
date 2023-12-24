const gridButton = document.getElementById('createGrid');
const container = document.querySelector('.grid');


gridButton.addEventListener('click', () => {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            const newCell = document.createElement('div');
            newCell.classList.add('.cell');
            newCell.style.width = 'calc(700px / 4)';
            newCell.style.height = 'calc(700px / 4)';
            newCell.style.background = 'lightblue';
            container.appendChild(newCell);

        }
    }
});