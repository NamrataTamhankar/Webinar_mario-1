let mountainSheet = new Image();
let cloudsSheet = new Image();
let castleSheet = new Image(); 
let spriteSheet = new Image();
let tileset = new Image();
// ye wala issue bas load na hone ki wajah se aa rha tha 
function preload() { 
  return new Promise(function (resolve, reject) {
    mountainSheet.src = './assets/sprites/mountain.png';
    cloudsSheet.src = './assets/sprites/clouds.png';
    castleSheet.src = './assets/sprites/castle.png';
    spriteSheet.src = './assets/sprites/spritesheet.png';
    tileset.src = './assets/sprites/tileset_gutter.png'; 
    let p1 = new Promise((resolve, reject) => {
      mountainSheet.addEventListener("load", function () {
        // console.log(1);
        resolve();
      }
      )
    })
    let p2 = new Promise((resolve, reject) => {
      cloudsSheet.addEventListener("load", function () {
        // console.log(1);
        resolve();
      }
      )
    })
    let p3 = new Promise((resolve, reject) => {
      castleSheet.addEventListener("load", function () {
        // console.log(1);
        resolve();
      }
      )
    })  
    let p4 = new Promise((resolve, reject) => {
        spriteSheet.addEventListener("load", function () {
          console.log(1);
          resolve();
        }
        )
      })
      let p5 = new Promise((resolve, reject) => {
        tileset.addEventListener("load", function () {
          console.log(1);
          resolve();
        }
        )
      })
    let finalPromise = Promise.all([p1, p2, p3,p4,p5]);
    finalPromise.then(function () {
        console.log("All five images loaded");
      resolve();
    })

  })

}