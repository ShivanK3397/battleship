import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js"

test.skip("hit",()=>{
    const ship = new Ship(3);
    expect(ship.hit()).toBe(1);
})

test("vertical",()=>{
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0,3,"vertical",ship);
    const myArray = gameboard.getBoard();

    expect(myArray[0][3]).toBe(ship);
    expect(myArray[1][3]).toBe(ship);
    expect(myArray[2][3]).toBe(ship);

})

test("horizontal",()=>{
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0,3,"horizontal",ship);
    const myArray = gameboard.getBoard();

    expect(myArray[0][3]).toBe(ship);
    expect(myArray[0][4]).toBe(ship);
    expect(myArray[0][5]).toBe(ship);

})

test("horizontal out of bounds",()=>{
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0,9,"horizontal",ship);
    const myArray = gameboard.getBoard();

    expect(myArray[0][9]).toBe(null);
    

})

test("vertical out of bounds",()=>{
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(9,3,"vertical",ship);
    const myArray = gameboard.getBoard();

    expect(myArray[9][9]).toBe(null);
    

})


