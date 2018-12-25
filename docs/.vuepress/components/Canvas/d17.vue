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
            dpr: 1,
            btnText: "clip",
            isClip: false
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.dpr = window.devicePixelRatio || 1;

        this.setupCanvas();
        this.draw();
    },

    methods: {
        setupCanvas() {
            let rect = this.canvas.getBoundingClientRect();
            this.canvas.width = rect.width * this.dpr;
            this.canvas.height = rect.height * this.dpr;
            this.ctx = this.canvas.getContext("2d");
            this.ctx.scale(this.dpr, this.dpr);
        },

        draw() {
            this.ctx.save(); // important
            if (this.isClip) {
                this.ctx.beginPath();
                this.ctx.arc(100, 75, 50, 0, Math.PI * 2, false);
                this.ctx.clip();
            }

            this.ctx.fillStyle = "purple";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.fillStyle = "red";
            this.ctx.beginPath();
            this.ctx.fillRect(100, 50, 300, 100);

            this.ctx.strokeStyle = "#fff";
            this.ctx.beginPath();
            this.ctx.arc(100, 75, 50, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.restore(); // important
        },

        redraw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw();
        },

        handleClick() {
            this.isClip = !this.isClip;
            this.redraw();
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
