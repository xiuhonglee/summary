<template>
    <div class="s01">
        <div class="svg-wrapper">
            <svg height="60" width="350" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="60" width="320" />
            </svg>
            <div class="text">SVG可伸缩矢量图</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>


<style scoped>
.s01 {
    width: 700px;
    height: 350px;
    border-radius: 4px;
    background: #a53f3c;
}
.svg-wrapper {
  height: 60px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  width: 420px;
}

.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 6px;
  stroke: #ffff00;
}

.text {
  color: #fff;
  font-family: "Roboto Condensed";
  font-size: 28px;
  letter-spacing: 5px;
  line-height: 32px;
  position: relative;
  top: -48px;
  left: -10px;
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 3px;
  }
}

.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}
</style>

