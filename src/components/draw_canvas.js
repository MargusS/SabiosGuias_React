//JSON -- JavaScript Object Notation

window.AFRAME.registerComponent('draw-canvas', {
  init: function () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext('2d');

    // we'll update this manually
    this.texture = null;
    // let canvas = document.getElementById("source-canvas");
    // wait until the element is ready
    this.el.addEventListener('loaded', e => {
      // create the texture
      this.texture = new window.THREE.CanvasTexture(this.canvas);

      // get the references neccesary to swap the texture
      let mesh = this.el.getObject3D('mesh');
      mesh.material.map = this.texture;
      // if there was a map before, you should dispose it
    });

    // drawGradient(this.ctx);

    // drawRectangle(this.ctx);

    this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    roundRect(this.ctx, 0, 0, 500, 100, 20, true);

    text(this.ctx);

    this.el.addEventListener('mouseenter', function(){
      console.log("hola");
    });

    this.el.addEventListener('click', function(){
      console.log("adios");
    });
  },
  tick: function() {
    // if the texture is created - update it
    if (this.texture) this.texture.needsUpdate = true;
  }
});

function drawRectangle(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, 500, 100);
}

function drawGradient(ctx) {
  console.log("hola");
  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 100, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 100, 100);
}

// http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}

function text(ctx) {
  ctx.font = "50px Arial";
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillText("Hello World", 50, 70);
}