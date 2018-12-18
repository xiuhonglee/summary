<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="rangeGroup" v-if="canvas">
            <div class="axPoint" v-if="canvas">
                <span>shadowOffsetX:</span>
                <input type="range" min="-30" :max="30" step="1" v-model="shadowOffsetX">
            </div>
            <div class="ayPoint" v-if="canvas">
                <span>shadowOffsetY</span>
                <input type="range" min="-30" :max="30" step="1" v-model="shadowOffsetY">
            </div>
            <div class="bxPoint" v-if="canvas">
                <span>shadowBlur</span>
                <input type="range" min="0" :max="30" step="1" v-model="shadowBlur">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            dpr: 1,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            shadowBlur: 5
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.dpr = window.devicePixelRatio || 1

        this.setupCanvas();
        this.draw();
    },

    watch: {
        shadowOffsetX() {
            this.redraw();
        },
        shadowOffsetY() {
            this.redraw();
        },
        shadowBlur() {
            this.redraw();
        }
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
            this.ctx.shadowColor = "rgba(0, 0, 0, .7)";
            this.ctx.shadowOffsetX = this.shadowOffsetX;
            this.ctx.shadowOffsetY = this.shadowOffsetY;
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.fillStyle = "#ff5777";
            this.ctx.fillRect(30, 50, 150, 75);

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#000fff";
            this.ctx.font = "24px serif";
            this.ctx.fillText("Hello World", 45, 170);
            this.ctx.restore();
        },

        redraw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
.rangeGroup {
    position: absolute;
    right: 15px;
    top: 50px;
}
</style>
