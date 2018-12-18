<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="slidecontainer">
            <span>opacity: {{opacity}}</span>
            <input type="range" min="0" max="1" value="0.7" step="0.1" class="slider" id="myRange" v-model="opacity">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            opacity: 0.7
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.setupCanvas(this.canvas);
        this.draw();
    },

    watch: {
        opacity(newValue) {
            this.clearRect();
            this.draw();
        }
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
            this.ctx.fillStyle = "#ff0000";
            this.ctx.fillRect(120, 50, 100, 50);

            this.ctx.beginPath();
            this.ctx.save();
            this.ctx.fillStyle = `rgba(255, 200, 0, ${this.opacity})`;
            this.ctx.fillRect(180, 80, 100, 50);
            this.ctx.restore();
        },

        clearRect() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
.slidecontainer {
    position: absolute;
    right: 15px;
    bottom: 30px;
    width: 120px;
    height: 30px;
    outline: none;
    opacity: 0.7;
    appearance: none;
}
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}
</style>
