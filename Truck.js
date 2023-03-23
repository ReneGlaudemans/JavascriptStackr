class Truck {
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.getEmptyGrid();
        this.piece = new Piece(ctx);
    }
    getEmptyGrid(){
        return Array.from({length:ROWS},() => Array(COLS).fill(0));
    }
    draw(){
        this.piece.draw();
    }
}