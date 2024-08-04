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
            else if (board[i][j]==="missed"){
                square.classList.add("missed");
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

function showBlankGameboard(player1,player2){
    const container = document.createElement("div");
    const player1Container = document.querySelector(".player-1-gameboard");
    const player1Gameboard = player1.getGameboard();
    const player2Gameboard = player2.getGameboard().getBoard();
    container.classList.add("container2");
    for (let i =0;i<10;i++){
 
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0;j<10;j++){
            const square=document.createElement("div");
            square.dataset.index=`${i}${j}`;
            if(player2Gameboard[i][j]==="missed"){
                square.classList.add("missed");
            }
            else{
                square.classList.add("square");
            }
            square.classList.add("square");
            square.addEventListener("click",()=>{
    
                const gameboard = player2.getGameboard();
                gameboard.recieveAttack(square.dataset.index[0],square.dataset.index[1]);
                
                const x = Math.floor(Math.random() * 11);
                const y = Math.floor(Math.random() * 11);
                player1Gameboard.recieveAttack(x,y);
                setTimeout(()=>{
                const toRemove = document.querySelector(".container");
                toRemove.remove();
                const newBoard = showGameboard(player1);
                player1Container.append(newBoard);
                },2000
                )

            })
            row.appendChild(square);
            
        }
        container.appendChild(row);
        

       
    }
    return container;
}

function updateBlankGameboard(board){
    const container = document.createElement("div");
    container.classList.add("container2");
    for (let i =0;i<10;i++){
 
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0;j<10;j++){
            const square=document.createElement("div");
            square.dataset.index=`${i}${j}`;
            if(board[i][j]==="missed"){
                square.classList.add("missed");
            }
            else{
                square.classList.add("square");
            }
        }
        container.appendChild(row);
    }
 return container
    
    
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

    const blankGameboard = showBlankGameboard(player1,player2);
   
    const blankContainer = document.querySelector(".player-2-gameboard");
    blankContainer.append(blankGameboard);
}




export {showGameboard,playGame}