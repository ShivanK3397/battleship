import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { createGameboard } from "./interface";
import "./styles.css";

const player1 = new Player("player");
const div = createGameboard(player1);
const container = document.querySelector(".player-1-gameboard");
container.appendChild(div);
console.log("test");

