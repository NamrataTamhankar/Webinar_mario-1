class MapBuilder {
    constructor(level, tileset, spriteSheet) {
      this.level = level;
      this.tileset = tileset;
      this.spriteSheet = spriteSheet;
      this.mountainSheet = mountainSheet;
      this.cloudsSheet = cloudsSheet;
      this.castleSheet = castleSheet;
      this.sceneryEntities = [];
      level.ground.forEach((ground) => {
        this.sceneryEntities.push(
          new Ground(this.tileset, ground[0], ground[1], ground[2], ground[3]),
        );
      });
      level.shrubs.forEach((shrub) => {
        this.sceneryEntities.push(
          new Shrub(this.tileset, shrub[0], shrub[1], shrub[2], shrub[3]),
        );
      });
  
      level.mountains.forEach((mountain) => {
        this.sceneryEntities.push(
          new Mountain(
            this.mountainSheet, mountain[0], mountain[1], mountain[2], mountain[3]),
        );
      });
      level.pipes.forEach((pipe) => {
        this.sceneryEntities.push(
          new Pipe(this.tileset, pipe[0], pipe[1], pipe[2], pipe[3]),
        );
      });
      level.smallClouds.forEach((smallCloud) => {
        this.sceneryEntities.push(
          new SmallCloud(
            this.cloudsSheet, smallCloud[0], smallCloud[1], smallCloud[2], smallCloud[3],
          ));
      });
      level.mediumClouds.forEach((mediumCloud) => {
        this.sceneryEntities.push(
          new MediumCloud(
            this.cloudsSheet, mediumCloud[0], mediumCloud[1], mediumCloud[2], mediumCloud[3],
          ));
      });
      level.largeClouds.forEach((largeCloud) => {
        this.sceneryEntities.push(
          new LargeCloud(
            this.cloudsSheet, largeCloud[0], largeCloud[1], largeCloud[2], largeCloud[3],
          ));
      });
      level.bricks.forEach((brick) => {
        this.sceneryEntities.push(
          new Brick(this.tileset, brick[0], brick[1], brick[2], brick[3]));
      });
      this.sceneryEntities.push(
        new Castle(
          this.castleSheet, level.castle[0], level.castle[1], level.castle[2], level.castle[3]),
      );
  
      this.sceneryEntities.push(
        new Flag(this.tileset, level.flag[0], level.flag[1], level.flag[2], level.flag[3]),
      );
  
      this.sceneryEntities.push(
        new Flagpole(
          this.tileset, level.flagpole[0], level.flagpole[1], level.flagpole[2], level.flagpole[3]),
      );
    }
    create(data) {
      this.sceneryEntities.forEach((scene) => {
        data.entities.scenery.push(scene);
      });
    }
    renderMap(data) {
      this.sceneryEntities.forEach((scene) => {
        this.drawBgEntity(scene, data);
      });
    }
    // helper function of renderMap=> if element is inside bounds then it will print that accoringly
    drawBgEntity(entity, data) {
      const ctx = data.canvas.ctx; 
      const viewport = data.viewport;
      if (((entity.xPos + entity.width >= viewport.vX &&
        entity.xPos + entity.width <= viewport.vX + viewport.width)) &&
        ((entity.yPos + entity.height >= viewport.vY &&
          entity.yPos + entity.height <= viewport.vY + viewport.height))) {
        ctx.drawImage(
          entity.sprite.img,
          entity.sprite.srcX, entity.sprite.srcY,
          entity.sprite.srcW, entity.sprite.srcH,
          entity.xPos - viewport.vX, entity.yPos - viewport.vY,
          entity.width, entity.height,
        );
      }
    }
  }