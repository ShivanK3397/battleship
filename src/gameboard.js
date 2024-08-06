import { Ship } from "./ship";

class Gameboard{
    constructor(){
        this.board = [[null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],]
        this.missedAttacks=[];
        this.ships=[];
        this.gameBegun = false;
    }

    getBoard(){
        return this.board;
    }

    placeShip(x,y,direction,ship){
        if (direction==="vertical"){
            if(x+ship.getLength()>9){
                //Do Nothing
            }
            else{
            for (let i= y;i<ship.getLength()+y;i++){
                this.board[x][i]=ship;
                
            }
            }
        }
        else{
            if (y+ship.getLength()>9){
                //Do Nothing 
            }
            else{
            for (let i= x;i<ship.getLength()+x;i++){
                this.board[i][y]=ship;
            }
            }
        }
        this.gameBegun=true;
        this.ships.push(ship);
    }

    recieveAttack(x,y){
        if (this.board[x][y]===null){
            this.missedAttacks.push([x,y])
            this.board[x][y]="missed";
            return false;
        }
        else if(this.board[x][y]==="hit"){
            //Do Nothing
        }
        else{
            const ship = this.board[x][y];
            this.board[x][y]="hit";
            ship.getHit();
            if (ship.isSunk()){
                const index = this.ships.indexOf(ship);
                this.ships.slice(index,1);
            }
            return true;

        }

    }

    allShipsSunk(){
        if (this.ships.length===0&&this.gameBegun===true){
            return true;
        }
        else{
            return false;
        }
    }
}

export {Gameboard}