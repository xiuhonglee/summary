<template>
    <div class="c04">
        <div class="camera">
            <div class="space" :style="{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
                <div class="box4"></div>
            </div>
        </div>
        <div class="ctrls">
            <p><span>rotateX</span><input type="range" min="0" max="360" step="1" v-model="rotateX"> {{rotateX}}°</p>
            <p><span>rotateY</span><input type="range" min="0" max="360" step="1" v-model="rotateY"> {{rotateY}}°</p>
            <p><span>rotateZ</span><input type="range" min="0" max="360" step="1" v-model="rotateZ"> {{rotateZ}}°</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    };
  }
};
</script>


<style>
.c04 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.c04 .camera {
  width: 200px;
  height: 200px;
  margin-right: 20px;
  perspective: 500px;
  perspective-origin: center center;
}

.c04 .space {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center center 29px;
}

.c04 .space div {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 0 50px 87px;
  border-style: solid;
  opacity: 0.9;
}

.box1 {
  border-color: transparent transparent #ff0;
  transform-origin: center bottom;
  transform: translateX(50px) translateY(50px) rotateX(-90deg);
}

.box2 {
  border-color: transparent transparent #f00;
  transform-origin: center bottom;
  transform: translateX(50px) translateY(50px) rotateX(-19.5deg);
}

.box3 {
  border-color: transparent transparent #0f0;
  transform-origin: left bottom;
  transform: translateX(50px) translateY(50px) rotateY(-60deg) rotateX(19.5deg);
  transition: 0.2s all;
}

.box4 {
  border-color: transparent transparent #00f;
  transform-origin: right bottom;
  transform: translateX(50px) translateY(50px) rotateY(60deg) rotateX(19.5deg);
}
</style>

