const PI2 = Math.PI * 2;

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
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx, moveX) {
        ctx.save();
        ctx.fillStyle = '#000';
        //ctx.beginPath();

        const angle = PI2 / this.sides;

        //ctx.translate(this.x, this.y);
        this.rotate += moveX * 0.2;
        //ctx.rotate(this.rotate);
        
        for (let i =0; i < this.sides; i++) {
            /* const x = this.radius +(100*i); */
            const x = (100 * i);
            const y = this.y;

            //(i == 0) ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
            //ctx.save();
            ctx.fillStyle = COLORS[i];
            ctx.beginPath();
            ctx.arc(x, y, 30, PI2, false);
            ctx.fill();
        }
    

        //ctx.fill();
        //ctx.closePath();
        ctx.restore();
    }
}