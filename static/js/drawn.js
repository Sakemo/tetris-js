function getFinalPosition(piece) {
    let finalY = piece.y;
    while (!piece.Collision(0, 1, piece.ActiveTetro)) {
        finalY++;
    }
    return [piece.x, finalY];
}

function DrawnSquare(position, color, stroke) {
    CONTEX.fillStyle = color;
    CONTEX.fillRect(position[0] * SQUARE_SIZE,
        position[1] * SQUARE_SIZE,
        SQUARE_SIZE, SQUARE_SIZE);

    if (stroke == true){
        CONTEX.strokeStyle = "#22C4CC";
        CONTEX.strokeRect(position[0] * SQUARE_SIZE,
            position[1] * SQUARE_SIZE,
            SQUARE_SIZE, SQUARE_SIZE);
    
    }

}

function CreateBoard(){
    for(r = 0; r < ROW; r++){
        BOARD[r] = [];
        for(c = 0; c < COL; c++){
            BOARD[r][c] = GRID_COLOR;
        }
    }
}

function DrawBoard(){
    for(r = 0; r < ROW; r++){
        for(c=0; c < COL; c++){
            let position = [c, r]
            DrawnSquare(position, BOARD[r][c], false);
        };
    };
};