<template>
    <canvas id="canvas" ref="canvas" width="740" height="300">Your browser not supported</canvas>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    let canvas = this.$refs.canvas;
    let ctx = canvas.getContext("2d");
    this.ctx = ctx;
    this.drawCoordinate(this.ctx, "#666", 10, 10);
    this.drawRect( ctx, "#ff5777", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2
    );
    this.drawCenterLines(this.ctx, "#ffff00");
  },

  methods: {
    drawRect(ctx, color, width, height) {
      ctx.fillStyle = color;
      ctx.lineWidth = 0.5;
      ctx.save();
      ctx.translate(
        canvas.width / 2 - width / 2,
        canvas.height / 2 - height / 2
      );
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    },

    /**
     * 画中心线
     */
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
    /**
     * color: 坐标系颜色
     * stepX: x间隔
     * stepY: 间隔
     */
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


<style>
#canvas {
  background-color: #222;
  margin: 20px 0;
  border-radius: 3px;
  box-shadow: 3px 5px 6px 1px #eee;
}
</style>


