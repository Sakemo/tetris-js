function randomPiece(){
    let r = randonNumber = Math.floor(
        Math.random()*PIECES.length
    );
    return new PieceClass(PIECES[r][0], PIECES[r][1])
};

document.addEventListener("keydown", ControlPiece);
function ControlPiece(event){
    if(event.keyCode == 37){
        Piece.MoveLeft();
        dropStart = Date.now();
    }else if(event.keyCode == 38){
        Piece.Rotate();
        dropStart = Date.now();
    }else if(event.keyCode == 39){
        Piece.MoveRight();
        dropStart = Date.now();
    }else if(event.keyCode == 40){
        Piece.MoveDown();
    }
}

let dropStart = Date.now();
let gameOver = false;
function Drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > 1000) {
        Piece.MoveDown();
        dropStart = Date.now();
    }

    if (!gameOver) {
        requestAnimationFrame(Drop);
    }
}


CreateBoard()
DrawBoard()
var Piece = randomPiece()
Drop();
