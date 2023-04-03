const cells = document.querySelectorAll('[data-cell]'); //ont cache le DOM
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'x'; const playerTwo = 'O';
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
    case 'x':
        statusText = "Au tour du joueur 2 (o)";
        break;
    case 'o':
        statusText = "Au tour du joueur 1 (x)";
        break;   
    case 'winsX':
        statusText = "Le joueur 1 (x) a gagné!";
        break; 
    case 'winsO':
        statusText = "Le joueur 2 (o) a gagné!";
        break;
    case 'draw':
        statusText = "Egalité! Personne ne gagne!";
        break;              
   }

   gameStatus.innerHTML = statusText;
   endGameStatus.innerHTML = statusText;
}
