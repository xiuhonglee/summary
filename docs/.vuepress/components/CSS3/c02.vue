<template>
    <div class="c02">
        <div class="camera" :style="{ perspective: `${perspective}px`, 'perspective-origin': `${perspectiveOriginX}% ${perspectiveOriginY}%`}">
            <div class="space">
                <div class="box" :style="{transform: `translateX(50px) translateY(50px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}"></div>
            </div>
        </div>
        <div class="ctrls">
            <p>
                perspective-origin x: <input type="range" min="0" max="100" step="1" v-model="perspectiveOriginX"> {{perspectiveOriginX}}%
            </p>
            <p>
                perspective-origin y: <input type="range" min="0" max="100" step="1" v-model="perspectiveOriginY"> {{perspectiveOriginY}}%
            </p>
            <p>
                perspective: <input type="range" min="90" max="2000" step="1" v-model="perspective"> {{perspective}}px
            </p>
            <p>
                translateZ: <input type="range" min="-100" max="100" step="1" v-model="translateZ"> {{translateZ}}px
            </p>
            <p>
                rotateX: <input type="range" min="-360" max="360" step="1" v-model="rotateX"> {{rotateX}}deg
            </p>
            <p>
                rotateY: <input type="range" min="-360" max="360" step="1" v-model="rotateY"> {{rotateY}}deg
            </p>
            <button @click="reset">reset</button>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      perspectiveOriginX: 50,
      perspectiveOriginY: 50,
      perspectiveOriginZ: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      perspective: 500
    };
  },
  methods: {
      reset() {
          this.rotateX = 0;
          this.rotateY = 0;
          this.translateZ = 0;
          this.perspective = 500;
          this.perspectiveOriginX = 50;
          this.perspectiveOriginY = 50;
          this.perspectiveOriginZ = 50;
      }
  }
};
</script>

<style>
p {
  padding: 0;
  margin: 2px;
}
.c02 {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 600px;
  height: 200px;
  margin-top: 20px;
}

.c02 .ctrls {
  margin-left: 20px;
}

.c02 .camera {
  width: 200px;
  height: 200px;
  perspective: 500px;
  perspective-origin: center center;
}

.c02 .space {
  width: 100%;
  height: 100%;
  border: 1px dashed #f00;
  transform-style: preserve-3d;
}
.c02 .box {
  width: 100px;
  height: 100px;
  background: #f55777;
  transform: translateX(50px) translateY(50px);
}
</style>


