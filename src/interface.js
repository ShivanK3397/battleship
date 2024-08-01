import { Player } from "./player.js"
import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

function showGameboard(player){
    const gameboard = player.getGameboard();
    const board = gameboard.getBoard();
    const container = document.createElement("div");
    container.classList.add("container");
    for (let i =0;i<board.length;i++){
 
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0;j<board[i].length;j++){
            const square=document.createElement("div");
            if(board[i][j]===null){
               
                square.classList.add("square");
            }
            else if (board[i][j]==="hit"){
             
                square.classList.add("hit");
            }
            else{
            
                square.classList.add("ship");
            }
            row.appendChild(square);
            
        }
        container.appendChild(row);

       
    }
    return container;

}

function showBlankGameboard(player){
    const container = document.createElement("div");
    container.classList.add("container");
    for (let i =0;i<10;i++){
 
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0;j<10;j++){
            const square=document.createElement("div");
            square.dataset.index=`${i}${j}`;
            square.classList.add("square");
            square.addEventListener("click",()=>{
                const gameboard = player.getGameboard();
                gameboard.recieveAttack(square.dataset.index[0],square.dataset.index[1])

            })
            row.appendChild(square);
            
        }
        container.appendChild(row);
        

       
    }
    return container;
}


function playGame(){
    const player1 = new Player("player");
    const player2 = new Player("player");

    const gameboard = player1.getGameboard();
    const ship = new Ship(3);
    gameboard.placeShip(5,5,"vertical",ship);
    const div = showGameboard(player1);
    const container = document.querySelector(".player-1-gameboard");
    container.appendChild(div);

    const gameboard2 = player2.getGameboard();
    const newShip = new Ship(3);
    gameboard2.placeShip(5,5,"vertical",newShip);

    const blankGameboard = showBlankGameboard(player2);
   
    const blankContainer = document.querySelector(".player-2-gameboard");
    blankContainer.append(blankGameboard);
    while(true){
        console.log('hi');
        const x = Math.floor(Math.random() * 11);
        const y = Math.floor(Math.random() * 11);
        gameboard.recieveAttack(5,5);
        const toRemove = document.querySelector(".container");
        toRemove.remove();
        const newBoard = showGameboard(player1);
        container.append(newBoard);
        break

        
    }
   

    
}



export {showGameboard,playGame}