import { SIZE_TILES, COLUMN, ROW } from "./main.js"

export class World {
  constructor(){
    this.level1 = {}
  }
  drawGrid(ctx){
    for(let row = 0; row < COLUMN; row++){
    for(let column = 0; column < ROW; column++){
      ctx.strokeStyle = "#00AADD"
      ctx.strokeRect(row * SIZE_TILES, column * SIZE_TILES, SIZE_TILES, SIZE_TILES)
    }
  }
  }
}