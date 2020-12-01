const input = {
    down: {},
    pressed: {},  
    init() {
     window.addEventListener("keydown",(e)=>{
        this.down[e.code] = true;
     });
     window.addEventListener("keyup",(e)=>{
        delete this.down[e.code];
        delete this.pressed[e.code];
     });
    },
    update(data) {
      const mario = data.entities.mario;
      if (data.userControl) {
        // Move Left. Left-Arrow or A
        if (this.isDown("ArrowLeft")) {
          if (mario.velY === 1.2) {
              mario.currentState = mario.states.walking;            
          } else {
            mario.xPos -= mario.velX;
          }
          mario.direction = 'left';
        }
        // Move Right. Right-Arrow or D
        if (this.isDown("ArrowRight")) {
          if (mario.velY === 1.2) {
              mario.currentState = mario.states.walking;
          } else {
            mario.xPos += mario.velX;
          }
          mario.direction = 'right';
        }
    //    Jumping ka code aayega
      } else {
        mario.currentState = mario.states.dead;
      }
    },
    isDown(code) {
      return this.down[code];
    },
    isPressed(code) {
      if (this.pressed[code]) {
        return false;
      } else if (this.down[code]) {
        this.pressed[code] = true;
        return this.pressed[code];
      }
    },
  };
  
  