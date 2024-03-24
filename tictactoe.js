const gamecells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('alertBox');

//  Making varable
let currentplayer ='x';
let nextplayer = 'o';
let playerTurn = currentplayer;

  player1.textContent = `player 1: ${currentplayer}`;
  player2.textContent = `player 2: ${currentplayer}`;
  

//  function to start your gane

const startGame = () =>{
    gamecells.forEach(cell =>{
        cell.addEventListener('click', (e) => {
            if (e.target.textContent === ''){
            e.target.textContent = playerTurn;
             if (checkwin()){
                console.log(`${playerTurn} is a winner!`);
                // showAlert(`${playerTurn} is a winner!`)
                 disableCells();
             }
             else if(checkTie()){
                console.log(`It's a Tie!`);
                // showAlert(`It's a Tie!`);
                disableCells();
             }
             else{
            changePlayerTurn();
             }
            }
        });
    });
}
   const handleclick = (e) =>{
    // if (e.target.textContent === '') {
    //     e.target.textContent = playerTurn;
    //      if (checkwin()){
    //         console.log(`${playerTurn} is a winner!`);
    //         disableCells();
    //      }
    //      else if(checkTie()){
    //         console.log(`It's a Tie!`);
    //          disableCells();
    //      }
    //      else{
    //     changePlayerTurn();
    //      }
    //     }
    
   }
//    function  to change player's turn

const changePlayerTurn = () =>{
  playerTurn = playerTurn === currentplayer? nextplayer: currentplayer;
}

//   to check win

const checkwin = () => {
    const winningconditions =
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i =0; i < winningconditions.length; i++){
        const [pos1,pos2,pos3] = winningconditions[i];
        if(gamecells[pos1].textContent !== '' &&
           gamecells[pos1].textContent === gamecells[pos2].textContent &&
           gamecells[pos2].textContent === gamecells[pos3].textContent){
            return true;
           }
    }
    return false;
}
    //   to check tie

const checkTie = () => {
    let emptycellscount = 0;
    gamecells.forEach(cell =>{
        if(cell.textContent === ''){
            emptycellscount++;
        }
    });
     return emptycellscount === 0 && !checkwin();
}
//    function to disable game-board cells after a win or tie
 const disableCells = ()=>{
    gamecells.forEach(cell =>{
        cell.removeEventListener('click', handleclick);
    });
 }
    // function to restart game
  const restartGame = () =>{
    gamecells.forEach(cell => {
        cell.textContent = ``;
        cell.classList.remove('disabled');
    })
    // function to show alert
    const showAlert = (msg) =>{
        alertBox.style.display = "block";
        alertBox.textContent = msg;
        setTimeout(()=> {
            alertBox.style.display ="none";
        }, 3000);
    }
    startGame();
  }
  restartBtn.addEventListener('click', restartGame);
//   calling start game function

startGame();

