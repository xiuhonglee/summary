<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
    </div>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            width: 500,
            height: 300,
            selected: "no"
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.drawWithBeginPath();
    },

    methods: {
        drawWithBeginPath(withBeginPath = "no") {
            // no beginPath
            this.ctx.strokeStyle = "#ff0000";
            this.ctx.save();

            this.ctx.strokeStyle = "#0000ff";
            this.ctx.save();

            this.ctx.moveTo(80, 50);
            this.ctx.lineTo(50, 120);
            this.ctx.lineTo(150, 120);
            this.ctx.restore();
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(230, 50);
            this.ctx.lineTo(200, 120);
            this.ctx.lineTo(300, 120);
            this.ctx.restore();
            this.ctx.stroke();
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
</style>
