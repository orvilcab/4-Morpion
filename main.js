const cells = document.querySelectorAll('[data-cell]'); //ont cache le DOM
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once: true});//{once: true} pour ne pas declencher plusieurs fois la même cellule.
});

function playGame(e) {
  e.target.innerHTML = playerTurn;
  
 updateGameStatus(playerTurn);// sa permet d'envoyé a qui le tour
  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function updateGameStatus(status) {
   let statusText;
   
   switch (status){
    case 'X':
        statusText = "Au tour du joueur 2 (O)";
        break;
    case 'O':
        statusText = "Au tour du joueur 1 (X)";
        break;   
    case 'winsX':
        statusText = "Le joueur 1 (X) a gagné!";
        break; 
    case 'winsO':
        statusText = "Le joueur 2 (O) a gagné!";
        break;
    case 'draw':
        statusText = "Egalité! Personne ne gagne!";
        break;              
   }
   gameStatus.innerHTML = statusText;
   endGameStatus.innerHTML = statusText;
}
