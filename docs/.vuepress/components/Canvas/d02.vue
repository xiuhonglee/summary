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
    this.drawMiddleLine(this.ctx);
    this.drawRect1(this.ctx);
    this.drawRect2(this.ctx);
    this.drawInfo(this.ctx);
  },

  methods: {
    drawInfo(ctx) {
      ctx.save();
      ctx.fillStyle = "#ffffff";
      ctx.font = "30px serif";
      ctx.fillText( "使用 ctx.beginPath", ctx.canvas.width / 2, ctx.canvas.height / 4);
      ctx.fillText( "未使用 ctx.beginPath", ctx.canvas.width / 2, ctx.canvas.height / 4 * 3);
      ctx.restore();
    },

    drawMiddleLine(ctx) {
      ctx.save();
      ctx.strokeStyle = "#ffffff";
      ctx.moveTo(0, ctx.canvas.height / 2);
      ctx.lineWidth = 0.5;
      ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
      ctx.stroke();
      ctx.restore();
    },
    drawRect1(ctx) {
      ctx.strokeStyle = "#ff0000";
      ctx.beginPath();
      ctx.rect(30, 30, 100, 100);
      ctx.stroke();

      ctx.strokeStyle = "#00ff00";
        ctx.beginPath();
      ctx.rect(200, 30, 100, 100);
      ctx.stroke();
    },

    drawRect2(ctx) {
      ctx.strokeStyle = "#ff0000";
      ctx.beginPath();
      ctx.rect(30, 180, 100, 100);
      ctx.stroke();

      ctx.strokeStyle = "#00ff00";
    //   ctx.beginPath();
      ctx.rect(200, 180, 100, 100);
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


