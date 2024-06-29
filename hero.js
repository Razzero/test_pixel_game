import { gameObject } from "./gameObject.js"
import { UP, DOWN, LEFT, RIGHT } from "./input.js"

export class Hero extends gameObject{
  constructor({game, sprite, position, scale}){
    super({game, sprite, position, scale})
  }
  update(){
    if(this.game.input.lastKey === UP){
      this.position.y--
    } else if(this.game.input.lastKey === DOWN){
      this.position.y++
    } else if(this.game.input.lastKey === LEFT){
      this.position.x--
    } else if(this.game.input.lastKey === RIGHT){
      this.position.x++
    }
  }
}