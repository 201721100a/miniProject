export default class Canvas {
  #x;
  #y;
  #w;
  #h;
  #id;
  constructor(x, y, w, h, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;

    let canvas = document.createElement("canvas");

    let ctx = canvas.getContext("2d");

    canvas.width = this.w;
    canvas.height = this.h;
    canvas.id = this.id;

    document.body.appendChild(canvas);

    //내일 다시 짜기

    drawImg = function (ctx, src, x, y, w, h) {
      ctx.clearRect(x, y, w, h);
      var img = new Image();
      img.src = src;
      img.onload = function () {
        ctx.drawImage(img, x, y, w, h);
      };
    };
  }
}
