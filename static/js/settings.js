const PIECES = [
    [Z, "#22C4CC", "#2243CC"],
    [S, "#22C4CC", "#2243CC"],
    [T, "#22C4CC", "#2243CC"],
    [O, "#22C4CC", "#2243CC"],
    [L, "#22C4CC", "#2243CC"],
    [I, "#22C4CC", "#2243CC"],
    [J, "#22C4CC", "#2243CC"]
];
const CANVAS = document.getElementById("tetris");
const CONTEX = CANVAS.getContext('2d');
const SCORE_ELEMENT = document.getElementById("score");
const ROW = 20;
const COL = 10;
const SQUARE_SIZE = 20;
const GRID_COLOR = "#444";
var BOARD = [];
var SCORE = 0
