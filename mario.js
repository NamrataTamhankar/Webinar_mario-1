class Mario extends Entity {
    constructor(img, xPos, yPos, width, height) {
      const sprite = new Sprite(img, 651, 5, 16, 16);
      super('mario', sprite, xPos, yPos, width, height);
    //   sounds missing hai 
    this.states = {
      standing: {
        movement(data) {
        }
      },
         walking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },          
      },
      dead: {
        movement(data) {
          self.velX = 0;
        }
      },
    };
    this.currentState = this.states.standing;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 3.8;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    }
  }