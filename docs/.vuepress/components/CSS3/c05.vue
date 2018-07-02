<template>
    <div class="c05">
        <div class="camera">
            <div class="space" :style="{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}">
                <div class="front">front</div>
                <div class="back">back</div>
                <div class="left">left</div>
                <div class="right">right</div>
                <div class="top">top</div>
                <div class="bottom">bottom</div>
            </div>
        </div>
        <div class="ctrls">
            <p><span>rotateX</span><input type="range" min="-360" max="360" step="1" v-model="rotateX"> {{rotateX}}°</p>
            <p><span>rotateY</span><input type="range" min="-360" max="360" step="1" v-model="rotateY"> {{rotateY}}°</p>
            <p><span>rotateZ</span><input type="range" min="-360" max="360" step="1" v-model="rotateZ"> {{rotateZ}}°</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rotateX: -40,
      rotateY: 50,
      rotateZ: 0
    };
  }
};
</script>


<style>
.c05 {
  display: flex;
  align-items: center;
}
.c05 .ctrls {
  margin-left: 20px;
}
.c05 .camera {
  width: 200px;
  height: 200px;
  perspective-origin: center center;
  perspective: 300px;
}

.c05 .space {
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: center center -50px;
  transform-style: preserve-3d;
  transform: translateY(60deg);
}

.c05 .space div {
  position: absolute;
  width: 100px;
  height: 100px;
  font-size: 22px;
  color: #fff;
  text-align: center;
  line-height: 100px;
}

.front {
  background: rgba(255, 0, 0, 0.8);
  transform-origin: center center;
  transform: translateX(50px) translateY(50px);
}

.back {
  background: rgba(0, 255, 0, 0.8);
  transform-origin: center center;
  transform: translateX(50px) translateY(50px) translateZ(-100px)
    rotateY(180deg);
}

.left {
  background: rgba(239, 95, 167, 0.8);
  transform-origin: right center;
  transform: translateX(-50px) translateY(50px) rotateY(-90deg);
}

.right {
  background: rgba(0, 0, 255, 0.8);
  transform-origin: left center;
  transform: translateX(150px) translateY(50px) rotateY(90deg);
}

.top {
  background: rgba(0, 255, 255, 0.8);
  transform-origin: bottom center;
  transform: translateX(50px) translateY(-50px) rotateX(90deg);
}
.bottom {
  background: rgba(255, 100, 50, 0.8);
  transform-origin: top center;
  transform: translateX(50px) translateY(150px) rotateX(-90deg);
}
</style>
