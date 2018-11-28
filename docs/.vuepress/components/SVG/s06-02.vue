<template>
  <div class="s06-02">
    <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="30" style="fill:#f9f; stroke: gray;">
        <animate
          id="c1"
          attributeName="r"
          atrributeType="XML"
          from="30"
          to="10"
          begin="0s"
          dur="4s"
          fill="freeze"
        ></animate>
        <animate
            attributeName="r"
            attributeTyep="XML"
            from="10"
            to="30"
            begin="c1.end"
            dur="4s"
            fill="freeze"
        ></animate>
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.s06-02 {
  width: 520px;
  height: 200px;
  margin: 15px 0;
  background: #fff;
  box-shadow: 0 0px 2px 2px #eee;
}
</style>