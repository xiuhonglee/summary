<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="btn2">
            <span style="font-size: 12px">调整0.5像素: &nbsp;</span>
            <select name="chooseBeginPath" v-model="onePixel" @change="handleChange">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
        </div>
        <div class="btn">
            <span style="font-size: 12px">根据dpr缩放canvas: &nbsp;</span>
            <select name="chooseBeginPath" v-model="scale" @change="handleChange">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            width: 500,
            height: 200,
            scale: "no",
            onePixel: "no"
            
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.draw();
    },

    methods: {
        setupCanvas(canvas) {
            // Get the device pixel ratio, falling back to 1.
            let dpr = window.devicePixelRatio || 1;
            // Get the size of the canvas in CSS pixels.
            let rect = canvas.getBoundingClientRect();
            // Give the canvas pixel dimensions of their CSS
            // size * the device pixel ratio.
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            let ctx = canvas.getContext("2d");
            // Scale all drawing operations by the dpr, so you
            // don't have to worry about the difference.
            ctx.scale(dpr, dpr);
            return ctx;
        },
        draw() {
            this.ctx.lineWidth = 1;

            // 矩形
            if(this.onePixel === "yes") {
                // this.ctx.rect(160.5, 80.5, 150, 50);
                this.ctx.translate(0.5, 0.5);
                this.ctx.rect(160, 80, 150, 50);
            } else {
                this.ctx.rect(160, 80, 150, 50);
            }
            this.ctx.stroke();

        },

        handleChange() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath(); // very important
            if (this.scale === "yes") {
                this.ctx = this.setupCanvas(this.canvas);
            } else {
                this.canvas.width = this.width;
                this.canvas.height = this.height;
                this.ctx = this.canvas.getContext("2d");
            }
            this.draw();
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
    right: 30px;
    bottom: 30px;
}
.btn2 {
    position: absolute;
    right: 30px;
    bottom: 70px;
}
</style>
