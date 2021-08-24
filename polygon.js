
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
        this.curX = 0;
        this.curWidth = document.body.clientWidth/2;
    }

    animate(ctx, moveX) {
        ctx.save();
        const L = 100;

        //speed and direction
        this.curX += moveX * 2;
        //ctx.rotate(this.rotate);
        ctx.translate(this.curX, this.y);

        for (let i = 0; i < this.sides; i++) {
            const x = (this.x*2) + (150*i);
            const y = this.y;

            ctx.translate(150, 0);

            ctx.save();
            ctx.fillStyle = COLORS[i];

            ctx.fillRect(-100, 0, L, L);
            ctx.closePath();
            ctx.restore();
        }
        ctx.restore();
    }
}