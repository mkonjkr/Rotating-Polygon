const COLORS = [
  "#4b45ab",
  "#554fb8",
  "#605ac7",
  "#2a91a8",
  "#2e9ab2",
  "#32a5bf",
  "#81b144",
  "#85b944",
  "#8fc549",
  "#e0af27",
  "#eeba2a",
  "#fec72e",
  "#bf342d",
  "#ca3931",
  "#d7423a",
];

export class Polygon {
  constructor(x, y, width, height, qty) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.qty = qty;
    this.curX = 0;
  }

  animate(ctx, moveX) {
    ctx.save();
    this.curX += moveX * 2;
    ctx.translate(this.curX, this.y);
    for (let i = 0; i < this.qty; i++) {
      this.disX = this.x + i * 140;
      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.beginPath();

      ctx.rect(this.disX, 0, this.width, this.height);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
    ctx.restore();
  }
}
