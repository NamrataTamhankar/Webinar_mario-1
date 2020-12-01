const render = {
  init(data) {
    data.canvas.ctx.fillStyle = '#63adff';
    data.canvas.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    data.mapBuilder.renderMap(data);
    this.drawEntity(data.entities.mario, data);
  },
  drawEntity(entity, data) {
    if (((entity.xPos + entity.width >= data.viewport.vX &&
      entity.xPos + entity.width <= data.viewport.vX + data.viewport.width)) &&
      ((entity.yPos + entity.height >= data.viewport.vY &&
        entity.yPos + entity.height <= data.viewport.vY + data.viewport.height))) {
      data.canvas.ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - data.viewport.vX, entity.yPos - data.viewport.vY,
        entity.width, entity.height,
      );
    }
  },
  update(data) {
    data.canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    data.canvas.ctx.fillStyle = '#63adff';
    data.canvas.ctx.fillRect(0, 0,  window.innerWidth, window.innerHeight);
    data.mapBuilder.renderMap(data);
    this.drawEntity(data.entities.mario, data);
  }, 
};
class Game {
  init() {
    preload()
      .then( ()=> {
        const canvasEl = document.querySelector('.board');
        canvasEl.height = window.innerHeight;
        canvasEl.width = window.innerWidth;
        const ctx = canvasEl.getContext('2d');
        const canvas = {
          canvas: canvasEl,
          ctx,
        };
        ctx.scale(2.74, 2.74);
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight,
          vX: 0,
          vY: 0,
        };
        const entities = {}
        const data = {
          canvas,
          viewport,
          entities,
          mapBuilder: new MapBuilder(levelOne, tileset, spriteSheet),
          userControl:true
        };
        const mario = new Mario(spriteSheet, 175, 175, 16, 16);
        data.entities.mario = mario;
        render.init(data);
        input.init();
        this.goToLoop(data);
      })      
  }
  goToLoop(data){
    const loop = ()=> {
     this.updateView(data);
      input.update(data);
      movement.update(data);
      render.update(data);
      window.requestAnimationFrame(loop);
    };
    loop();
  }
  reset() {
    location.reload();
  }
  // left update karne ke liye 
   updateView(data) {
    const viewport = data.viewport;
    const margin = viewport.width / 6;
    const center = {
      x: data.entities.mario.xPos + (data.entities.mario.width * 0.5),
      y: data.entities.mario.yPos + (data.entities.mario.height * 0.5),
    };

    if (center.x < viewport.vX + (margin * 2)) {
      viewport.vX = Math.max(center.x - margin, 0);
    } else if (center.x > (viewport.vX + viewport.width) - (margin * 2)) {
      viewport.vX = Math.min((center.x + margin) - viewport.width, 3400 - viewport.width);
    }
  }
}
const game = new Game();
game.init();
const movement = {
  update(data) {
    data.entities.mario.currentState.movement(data);
  },
};