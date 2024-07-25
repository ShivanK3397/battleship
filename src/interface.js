import { Player } from "./player.js"

function createGameboard(player){
    const gameboard = player.getGameboard();
    const board = gameboard.getBoard();
    const container = document.createElement("div");
    container.classList.add("container");
    for (let i =0;i<board.length;i++){
        console.log(i);
        const row = document.createElement("div");
        
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

export {createGameboard}