// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//ref
const setBtn = document.getElementById('set-dimension');
const dimensionLevel = document.getElementById('dimensions');
const wrapGrid = document.querySelector('.wrap-grid');

//grid setup 
setBtn.addEventListener('click', () => {
    // Set dimension grid
    const gridDimension = dimensionLevel.value;
    console.log(gridDimension);
    
    let cellsNumber;
    let cellsPerSide;
    switch(gridDimension) {
        case 'easy':
            cellsNumber = 100;
            cellsPerSide = 10;
            break;
        case 'medium':
            cellsNumber = 81;
            cellsPerSide = 9;
            break;
        case 'hard':
            cellsNumber = 49;
            cellsPerSide = 7;
    }
    console.log(cellsNumber);
    console.log(cellsPerSide);

    //Gen grid parent
    const grid = document.createElement('div');
    grid.classList.add('grid');
    // Inserisci grid
    wrapGrid.append(grid);
})