import { World } from "./world.js"
import { Hero } from "./hero.js"
import { Input } from "./input.js"

export const SIZE_TILES = 20
export const ROW = 25
export const COLUMN = 15
const MAX_HEIGHT = ROW * SIZE_TILES
const MAX_WIDTH = COLUMN * SIZE_TILES

window.addEventListener('load', () => {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  canvas.height = MAX_HEIGHT
  canvas.width = MAX_WIDTH
  canvas.style.border = "0.08rem solid black"
  
  class Game {
    constructor(){
      this.world = new World()
      this.hero = new Hero({
        game: this,
        position: {x:2, y:2}
      })
      this.input = new Input()
    }
    render(ctx){
      this.hero.update()
      
      this.world.drawGrid(ctx)
      this.hero.draw(ctx)
    }
  }
  const game = new Game()
  
  function animate(){
    requestAnimationFrame(animate)
    game.render(ctx)
  }
  requestAnimationFrame(animate)
})




