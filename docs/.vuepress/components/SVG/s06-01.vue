<template>
  <div class="s06-01">
    <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <!-- example-1 -->
      <rect x="10" y="10" width="200" height="20" stroke="black" fill="none">
        <animate
          attributeName="width"
          attributeType="XML"
          from="200"
          to="20"
          begin="0s"
          dur="5s"
          fill="freeze"
        ></animate>
      </rect>

      <!-- example-2 -->
      <rect
        x="10"
        y="10"
        width="20"
        height="20"
        style="stroke: black; fill: green; style: fill-opacity: 0.25;"
      >
        <!-- animation-1 -->
        <animate
          attributeName="width"
          attributeType="XML"
          from="20"
          to="200"
          begin="0s"
          dur="8s"
          fill="freeze"
        ></animate>

        <!-- animation-2 -->
        <animate
          attributeName="height"
          attributType="XML"
          from="20"
          to="150"
          begin="0s"
          dur="8s"
          fill="freeze"
        ></animate>

        <!-- animation-3 -->
        <animate
          attributeName="fill-opacity"
          attributeType="CSS"
          from="0.25"
          to="1"
          begin="0s"
          dur="3s"
          fill="freeze"
        ></animate>

        <!-- animation-4 -->
        <animate
          attributeName="fill-opacity"
          attributeType="CSS"
          from="1"
          to="0.25"
          begin="3s"
          dur="3s"
          fill="freeze"
        ></animate>
      </rect>

      <!-- example-4 -->
      <rect x="100" y="100" width="20" height="20" style="stroke: black; fill:#cfc">
        <animate
          attributeName="width"
          attributeType="XML"
          begin="0s"
          to="220"
          dur="8s"
          fill="freeze"
        ></animate>
      </rect>

      <!-- example-4 -->
      <circle cx="170" cy="170" r="20" style="fill: #ccf; stroke: black;">
        <animate
          attributeName="r"
          attributeType="XML"
          from="20"
          to="50"
          begin="0s"
          dur="4s"
          fill="freeze"
        ></animate>
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.s06-01 {
  width: 520px;
  height: 200px;
  margin: 15px 0;
  background: #fff;
  box-shadow: 0 0px 2px 2px #eee;
}
</style>