<template>
    <div class="wrap" style="relative">
        <canvas ref="canvas" width="500" height="200"></canvas>
        <div class="btn">
            <span style="font-size: 12px">beginPath: &nbsp;</span>
            <select name="chooseBeginPath" v-model="selected" @change="handleChange">
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
            this.ctx.moveTo(80, 50);
            this.ctx.lineTo(50, 120);
            this.ctx.lineTo(150, 120);
            this.ctx.stroke();

            if(withBeginPath === "yes") {
                this.ctx.beginPath();
            }

            this.ctx.moveTo(230, 50);
            this.ctx.lineTo(200, 120);
            this.ctx.lineTo(300, 120);
            this.ctx.closePath();
            this.ctx.stroke();

            this.ctx.font = "12px Arial";
            this.ctx.fillStyle = "#000000";
            this.ctx.fillText("closePath:", 50, 160);
            this.ctx.fillText("closePath:", 200, 160);
            this.ctx.save();

            this.ctx.fillStyle = "#ff0000";
            this.ctx.fillText("no", 120, 160);
            this.ctx.fillText("yes", 270, 160);
        },

        handleChange() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath(); // very important
            this.drawWithBeginPath(this.selected);
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
