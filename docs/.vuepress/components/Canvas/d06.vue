<template>
    <canvas ref="canvas" width="500" height="200"></canvas>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            width: 500,
            height: 300
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");

        // without closepath
        this.ctx.moveTo(80, 50);
        this.ctx.lineTo(50, 120);
        this.ctx.lineTo(150, 120);
        this.ctx.stroke();

        // width closepath
        // this.ctx.beginPath();
        this.ctx.moveTo(280, 50);
        this.ctx.lineTo(250, 120);
        this.ctx.lineTo(350, 120);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.font = "12px Arial";
        this.ctx.fillStyle = "#000000";
        this.ctx.fillText("A", 80, 45);
        this.ctx.fillText("B", 35, 125);
        this.ctx.fillText("C", 155, 125);

        this.ctx.fillText("A", 280, 45);
        this.ctx.fillText("B", 235, 125);
        this.ctx.fillText("C", 355, 125);
        this.ctx.fillText("closePath:", 50, 160);
        this.ctx.fillText("closePath:", 250, 160);
        this.ctx.save();

        this.ctx.fillStyle = "#ff0000";
        this.ctx.fillText("no", 120, 160);
        this.ctx.fillText("yes", 320, 160);

    },
    methods: {
        drawImg() {
            const self = this;
            const img = new Image();
            img.src = "https://i.loli.net/2018/12/14/5c137165c6324.png";
            img.onload = () => {
                self.ctx.drawImage(img, 175, 75, 150, 150);
            };
        },

        drawAxis() {
            this.ctx.font = "12px serif";
            this.ctx.fillStyle = "#000";
            for (let i = 0; i <= this.width; i += 50) {
                this.ctx.fillText(i, i, 10);
            }
            for (let j = 0; j <= this.height; j += 50) {
                this.ctx.fillText(j, 0, j);
            }
        },

        drawCenterLines(ctx, color) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;

            ctx.beginPath();
            ctx.moveTo(ctx.canvas.width / 2, 0);
            ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, ctx.canvas.height / 2);
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
            ctx.stroke();
        },

        drawCoordinate(ctx, color, stepX, stepY) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            for (let i = stepX + 0.5; i < this.ctx.canvas.width; i += stepX) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, this.ctx.canvas.height);
                ctx.stroke();
            }

            for (let j = stepY + 0.5; j < this.ctx.canvas.height; j += stepY) {
                ctx.beginPath();
                ctx.moveTo(0, j);
                ctx.lineTo(this.ctx.canvas.width, j);
                ctx.stroke();
            }
        }
    }
};
</script>


<style scoped>
canvas {
    width: 500px;
    height: 200px;
    margin: 15px 0;
    box-shadow: 0 0 2px 3px #eee;
}
</style>
