<template>
    <canvas ref="canvas" width="500" height="300"></canvas>
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
        this.drawImg();

        this.drawCoordinate(this.ctx, "#aaa", 25, 25);
        this.drawCenterLines(this.ctx, "#ff0000");
        this.drawAxis();
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
    width: 400px;
    height: 300px;
    margin: 15px 0;
    box-shadow: 0 0 2px 3px #eee;
}
</style>
