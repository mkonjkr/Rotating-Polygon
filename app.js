"use strict";
import { Polygon } from "./polygon.js";

class App {
    constructor() {

        //set canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        
        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('pointerup', this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        
        this.polygon = new Polygon(
            // middle of width
            this.canvas.width / 2,
            // Height
            this.canvas.height /2,
            // size of Polygon
            this.stageHeight / 2
            ,
            // number of sides
            10
        );
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        // Speed of slide
        this.moveX *= 0.82;
        this.polygon.animate(this.ctx, this.moveX);
    }

    onDown(e) {
        this.isDown = true;
        this.moveX = 0;
        this.offsetX = e.clientX;
    }

    onMove(e) {
        if (this.isDown) {
            this.moveX = e.clientX - this.offsetX;
            // save previos x position
            this.offsetX = e.clientX;
        }
    }

    onUp(e) {
        this.isDown = false;
    }
}

window.onload = () => {
    new App();
}