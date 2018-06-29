<template>
    <div class="c03">
        <div class="wrapper">
            <div class="three" :style="{width: `${width}px`, height: `${height}px`, borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`, borderColor: `${bctop} ${bcright} ${bcbottom} ${bcleft}`}"></div>
        </div>
        <div class="controls">
            <p><span>width:</span><input type="range" min="0" max="50" step="1" v-model="width"> {{width}}px</p>
            <p><span>height:</span><input type="range" min="0" max="50" step="1" v-model="height"> {{height}}px</p>
            <p><span>border-top:</span><input type="range" min="0" max="50" step="1" v-model="borderTop">{{borderTop}}px</p>
            <p><span>border-right:</span><input type="range" min="0" max="50" step="1" v-model="borderRight">{{borderRight}}px</p>
            <p><span>border-bottom:</span><input type="range" min="0" max="50" step="1" v-model="borderBottom">{{borderBottom}}px</p>
            <p><span>border-left:</span><input type="range" min="0" max="50" step="1" v-model="borderLeft">{{borderLeft}}px</p>
        </div>
        <div class="color">
            <p><span>border-color top</span><input type="radio" name="bctop" value="transparent" v-model="bctop">透明<input type="radio" checked name="bctop" v-model="bctop" value="#f00">红色</p>
            <p><span>border-color right</span><input type="radio" name="bcright" value="transparent" v-model="bcright">透明<input type="radio" checked name="bcright" v-model="bcright" value="#0f0">绿色</p>
            <p><span>border-color bottom</span><input type="radio" name="bcbottom" value="transparent" v-model="bcbottom">透明<input type="radio" checked name="bcbottom" v-model="bcbottom" value="#00f">蓝色</p>
            <p><span>border-color left</span><input type="radio" name="bcleft" value="transparent" v-model="bcleft">透明<input type="radio" checked name="bcleft" v-model="bcleft" value="#ff0">黄色</p>
            <div class="type">
                <button @click="pthree">正三角形</button>
                <button @click="nthree">倒三角</button>
                <button @click="pTrapezoidal">梯形</button>
                <button @click="nTrapezoidal">倒梯形</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      width: 50,
      height: 50,
      borderTop: 50,
      borderRight: 50,
      borderBottom: 50,
      borderLeft: 50,
      bctop: "#f00",
      bcright: "#0f0",
      bcbottom: "#00f",
      bcleft: "#ff0"
    };
  },
  methods: {
    pthree() {
      this.width = 0;
      this.height = 0;
      this.borderTop = 0;
      this.borderRight = 25;
      this.borderBottom = 44;
      this.borderLeft = 25;
      this.bctop = "transparent";
      this.bcright = "transparent";
      this.bcleft = "transparent";
      this.bcbottom = "#00f";
    },
    nthree() {
      this.width = 0;
      this.height = 0;
      this.borderTop = 44;
      this.borderRight = 25;
      this.borderBottom = 0;
      this.borderLeft = 25;
      this.bctop = "#f00";
      this.bcright = "transparent";
      this.bcleft = "transparent";
      this.bcbottom = "transparent";
    },
    pTrapezoidal() {
      this.width = 50;
      this.height = 0;
      this.borderTop = 0;
      this.borderRight = 16;
      this.borderBottom = 44;
      this.borderLeft = 16;
      this.bctop = "transparent";
      this.bcright = "transparent";
      this.bcleft = "transparent";
      this.bcbottom = "#00f";
    },
    nTrapezoidal() {
      this.width = 50;
      this.height = 0;
      this.borderTop = 44;
      this.borderRight = 16;
      this.borderBottom = 0;
      this.borderLeft = 16;
      this.bctop = "#f00";
      this.bcright = "transparent";
      this.bcleft = "transparent";
      this.bcbottom = "transparent";
    }
  }
};
</script>

<style>
.c03 {
  display: flex;
  align-items: center;
  position: relative;
  width: 800px;
  height: 200px;
  margin: 20px 0;
  border-radius: 3px;
  box-shadow: 0 0 15px 8px #eee;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 120px;
  margin-left: 20px;
}
.three {
  width: 0;
  height: 50;
  border-style: solid;
  border-width: 0;
  border-color: #f00 #0f0 #00f #ff0;
}
.controls {
  display: flex;
  flex-direction: column;
}
.color {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.color .type {
  padding: 10px 40px;
}
.controls p,
.color p {
  display: flex;
  margin: 0;
}
.controls p span,
.color p span {
  display: block;
  width: 120px;
  height: 30px;
  margin-right: 10px;
  text-align: right;
}
.color p span {
    width: 160px;
}
</style>