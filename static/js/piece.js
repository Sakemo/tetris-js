class PieceClass{
    constructor(tetro, color){
        this.tetro = tetro;
        this.color = color;

        this.tetroNumber = 0;
        this.ActiveTetro = this.tetro[this.tetroNumber];

        this.x = 3;
        this.y = -2;
    };

    FillColor(color,active){
        for(r = 0; r < this.ActiveTetro.length;r++){
            for(c = 0; c < this.ActiveTetro.length; c++){
                if(this.ActiveTetro[r][c]){
                    let NewX = this.x + c
                    let NewY = this.y + r
                    let position = [NewX, NewY];
                    DrawnSquare(position, color, active);
                };
            };
        };
    };

    Drawn(){
        this.FillColor(this.color, false);
    };

    UnDrawn(){
        this.FillColor(GRID_COLOR, true);
    };

    MoveDown(){
        if(!this.Collision(0,1,this.ActiveTetro)){
            this.UnDrawn();
            this.y++;
            this.Drawn();
        }else{
            this.LockPice();
            Piece = randomPiece();
        };
    };

    MoveRight(){
        if(!this.Collision(1,0, this.ActiveTetro)){
            this.UnDrawn();
            this.x++;
            this.Drawn();
        };
    };

    MoveLeft(){
        if(!this.Collision(-1,0, this.ActiveTetro)){
            this.UnDrawn();
            this.x--;
            this.Drawn();
        };
    };

    Rotate(){
        let NextPattern = this.tetro[(
            this.tetroNumber + 1) %
            this.tetro.length
        ];
        let KICK = 0;

        if(this.Collision(0,0, NextPattern)){
            if(this.x > COL/2){
                KICK = -1;
            }else{
                KICK = 1;
            };
        };

        if(!this.Collision(KICK,0, NextPattern)){
            this.UnDrawn();
            this.x += KICK;
            this.tetroNumber = (
                this.tetroNumber + 1
            )%this.tetro.length;
            this.ActiveTetro = this.tetro[this.tetroNumber];
            this.Drawn()
        }
    };

    LockPice(){
        for(r=0; r < this.ActiveTetro.length; r++){
            for(c=0; c < this.ActiveTetro.length; c++){
                if(!this.ActiveTetro[r][c]){
                    continue;
                }

                if(this.y + r < 0){
                    document.querySelector('.GameOver').style.display = 'block'
                    gameOver = true;
                    break;
                }

                BOARD[this.y+r][this.x+c] = this.color
            }
        }

        for(r=r; r < ROW; r++){
            let IsRowFull = true;
            for(c=0; c < COL; c++){
                IsRowFull = IsRowFull && (BOARD[r][c] != GRID_COLOR);
            };
            if(IsRowFull){
                for(let y = r;y > 1;y--){
                    for(c=0; c < COL; c++){
                        BOARD[y][c] = BOARD[y-1][c];
                    };
                };

                for(c=0; c < COL; c++){
                    BOARD[0][c] = GRID_COLOR;
                }

                SCORE += 10;
            };
        };
        
        DrawBoard();
        SCORE_ELEMENT.innerHTML = SCORE;

    };

    Collision(x,y,piece){
        for(r=0;r < piece.length; r++){
            for(c=0;c < piece.length;c++){
                if(!piece[r][c]){
                    continue;
                }

                let NewX = this.x + c + x;
                let NewY = this.y + r + y;

                if(NewX < 0 || NewX >= COL || NewY >= ROW){
                    if(NewY >= ROW){           
                    setTimeout(() => {
                        document.querySelector('.canvas-cont').style.top = "55%"
                    }, 10);             
                    this.color = '#2243CC'
                    this.FillColor(this.color, true);
                    setTimeout(function() {
                        document.querySelector('.canvas-cont').style.top = "50%";
                    }, 100);    
                    }
                    if(NewX < 0){
                        setTimeout(() => {
                            document.querySelector('.canvas-cont').style.left = "45%"
                        }, 10);                          
                        setTimeout(function() {
                            document.querySelector('.canvas-cont').style.left = "50%";
                        }, 100);  
                    }
                    if(NewX >= COL){
                        setTimeout(() => {
                            document.querySelector('.canvas-cont').style.left = "55%"
                        }, 10);                          
                        setTimeout(function() {
                            document.querySelector('.canvas-cont').style.left = "50%";
                        }, 60);  
                    }
                    return true;
                }

                if(NewY < 0){
                    continue;
                };

                if(BOARD[NewY][NewX] != GRID_COLOR){
                    setTimeout(() => {
                        document.querySelector('.canvas-cont').style.top = "55%"
                    }, 10);  
                    this.color = '#2243CC'
                    setTimeout(function() {
                        document.querySelector('.canvas-cont').style.top = "50%";
                    }, 100);            
                    return true;
                };
            };
        };
        return false;
    };

};