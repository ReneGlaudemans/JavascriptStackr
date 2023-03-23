const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = COLS * BLOCK_SIZE;
canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

let truck = null;

function simulate(){
    truck = new Truck(ctx);
    console.table(truck.grid)
    draw();
}
function draw(){
    const { width,height} = canvas;
    ctx.clearRect(0,0,width,height);
    truck.draw();
}