<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="rangeGroup">
            <div class="axPoint" v-if="canvas">
                <span>ax:</span>
                <input type="range" min="0" :max="canvas.width / 2" step="1" v-model="ax">
            </div>
            <div class="ayPoint" v-if="canvas">
                <span>ay:</span>
                <input type="range" min="0" :max="canvas.height / 2" step="1" v-model="ay">
            </div>
            <div class="bxPoint" v-if="canvas">
                <span>bx:</span>
                <input type="range" min="0" :max="canvas.width / 2" step="1" v-model="bx">
            </div>
            <div class="byPoint" v-if="canvas">
                <span>by:</span>
                <input type="range" min="0" :max="canvas.height / 2" step="1" v-model="by">
            </div>
        </div>
        <div class="btn" @click="handleClick">重置</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            gradient: null,
            ax: 0,
            ay: 0,
            bx: 0,
            by: 0
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.setupCanvas(this.canvas);

        this.initAB();
        this.draw();
    },

    watch: {
        ax() {
            this.redraw();
        },
        ay() {
            this.redraw();
        },
        bx() {
            this.redraw();
        },
        by() {
            this.redraw();
        }
    },

    methods: {
        initAB() {
            this.ax = 0;
            this.ay = this.canvas.height / 4;
            this.bx = this.canvas.width / 2;
            this.by = this.canvas.height / 4;
        },
        handleClick() {
            this.initAB();
        },
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
            this.gradient = this.ctx.createLinearGradient(
                this.ax,
                this.ay,
                this.bx,
                this.by
            );
            this.gradient.addColorStop(0, "blue");
            this.gradient.addColorStop(0.25, "white");
            this.gradient.addColorStop(0.5, "purple");
            this.gradient.addColorStop(0.75, "red");
            this.gradient.addColorStop(1, "yellow");
            this.ctx.fillStyle = this.gradient;
            this.ctx.fillRect(30, 30, 280, 140);

            this.ctx.save();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = "cyan";
            this.ctx.beginPath();
            this.ctx.moveTo(this.ax, this.ay);
            this.ctx.lineTo(this.bx, this.by);
            this.ctx.stroke();
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
    top: 30px;
}

.bxPoint {
    margin-top: 30px;
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
