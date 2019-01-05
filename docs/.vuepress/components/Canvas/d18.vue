<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="btn" @click="handleClick">{{btnText}}</div>
        <section class="fillRule">
            <input type="radio" v-model="fillRule" value="nonzero">nonzero(default)
            <input type="radio" v-model="fillRule" value="evenodd">evenodd
        </section>
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
            isClip: false,
            fillRule: "evenodd"
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
                // create clip path
                let region = new Path2D();
                region.rect(100, 85, 300, 30);
                region.rect(235, 50, 30, 100);
                this.ctx.clip(region, this.fillRule);
            }

            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.strokeStyle = "#fff"; 
            this.ctx.strokeRect(100, 85, 300, 30);
            this.ctx.strokeRect(235, 50, 30, 100);
            this.ctx.restore(); // important
        },

        redraw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw();
        },

        handleClick() {
            this.btnText = this.btnText === "clip" ? "reset" : "clip";
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
.fillRule {
    position: absolute;
    left: 150px;
    bottom: 15px;
    color: #ff0000;
}
</style>
