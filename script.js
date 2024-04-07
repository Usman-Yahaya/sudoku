// Grille Sudoku
let sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  // Fonction pour créer la grille
  function createSudokuGrid() {
    let sudokuBoard = document.getElementById('sudoku-board');
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let cell = document.createElement('input');
        cell.className = 'cell';
        cell.type = 'number';
        cell.min = '1';
        cell.max = '9';
        cell.value = sudokuGrid[i][j] === 0 ? '' : sudokuGrid[i][j];
        cell.dataset.row = i;
        cell.dataset.col = j;
        sudokuBoard.appendChild(cell);
      }
    }
  }
  
  // Fonction pour vérifier la grille Sudoku
  function checkSudoku() {
    let cells = document.querySelectorAll('.cell');
  
    // Tableaux pour stocker les valeurs des lignes, colonnes et blocs
    let rows = Array.from(Array(9), () => new Array(9).fill(0));
    let cols = Array.from(Array(9), () => new Array(9).fill(0));
    let blocks = Array.from(Array(9), () => new Array(9).fill(0));
  
    // Récupérer les valeurs des cellules et les stocker dans les tableaux correspondants
    for (let cell of cells) {
      let row = parseInt(cell.dataset.row);
      let col = parseInt(cell.dataset.col);
      let value = parseInt(cell.value);
  
      rows[row][value - 1]++;
      cols[col][value - 1]++;
  
      let blockIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      blocks[blockIndex][value - 1]++;
    }
  
    // Vérifier les lignes, colonnes et blocs
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (rows[i][j] > 1 || cols[i][j] > 1 || blocks[i][j] > 1) {
          alert('La grille est incorrecte!');
          return;
        }
      }
    }
  
    alert('La grille est correcte!');
  }
  
  // Appeler la fonction pour créer la grille au chargement de la page
  window.onload = createSudokuGrid;

  
  