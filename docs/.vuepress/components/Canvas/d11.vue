<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="btn" @click="handleClick">{{btnText}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            btnText: "清空"
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.setupCanvas(this.canvas);
        this.draw();
    },

    methods: {
        setupCanvas(canvas) {
            let dpr = window.devicePixelRatio || 1;
            let rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            let ctx = canvas.getContext("2d");
            ctx.scale(dpr, dpr);
            return ctx;
        },
        draw() {
            this.ctx.lineWidth = 1;

            this.ctx.beginPath();
            this.ctx.strokeRect(20, 30, 100, 50);

            this.ctx.beginPath();
            this.ctx.save();
            this.ctx.fillStyle = "#ffb53d";
            this.ctx.fillRect(20, 120, 100, 50);
            this.ctx.restore();

            this.ctx.font = "12px serif";
            this.ctx.fillText("ctx.rect(20, 30, 100, 50)", 140, 50);
            this.ctx.fillText("ctx.stroke()", 140, 65);
            this.ctx.fillText("或", 260, 58);
            this.ctx.fillText("ctx.strokeRect(20, 30, 100, 50)", 290, 58);

            this.ctx.fillText("ctx.rect(20, 120, 100, 50)", 140, 150);
            this.ctx.fillText("ctx.fill()", 140, 165);
            this.ctx.fillText("或", 260, 158);
            this.ctx.fillText("ctx.fillRect(20, 120, 100, 50)", 290, 158);
        },

        clearRect() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }, 

        handleClick() {
            if (this.btnText === "清空") {
                this.clearRect();
                this.btnText = "绘制";
            } else {
                
                this.draw();
                this.btnText = "清空";
            }
        }
    }
};
</script>


<style scoped>
.wrap {
    position: relative;
    width: 500px;
    height: 200px;
    margin: 15px 0;
}
canvas {
    width: 500px;
    height: 200px;
    box-shadow: 0 0 2px 3px #eee;
}
.btn {
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 60px;
    height: 25px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    background-color: #ff5777;
}
</style>
