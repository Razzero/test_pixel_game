import { SIZE_TILES } from "./main.js"

export class gameObject{
  constructor(
    {
      game,
      sprite,
      position,
      scale
    })
  {
    this.game = game
    this.sprite = sprite ?? {x:0,y:0,width:SIZE_TILES,height:SIZE_TILES,image:""}
    this.position = position ?? {x:0,y:0}
    this.scale = scale ?? 1
  }
  draw(ctx){
    ctx.fillRect(
      this.position.x * SIZE_TILES,
      this.position.y * SIZE_TILES,
      SIZE_TILES,
      SIZE_TILES
    )
  }
}