
<template>
    <div class="s05-02">

        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
           <g>
                <path d="M80,110 L145,110 
                    A100,50 30 0 1, 297,110
                    L360,110" stroke="#aa0000" stroke-width="2" fill="none"/>

                <!-- 辅助线 -->
                <ellipse cx="220" cy="110" rx="100" ry="50" style="stroke: #000; fill: none; stroke-dasharray: 5 5; "></ellipse>
                <ellipse cx="220" cy="110" rx="100" ry="50" transform="rotate(30, 220, 110)" style="stroke: #000; fill: none; stroke-dasharray: 5 5; "></ellipse>

                <!-- 说明文字 -->
                <text x="30" y="130">
                    <tspan font-weight="bold" font-size="12" fill="red">M(80, 110)</tspan>
                </text>
                <circle cx="80" cy="110" r="2" stroke="none" fill="red"></circle>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s05-02 {
  width: 520px;
  height: 200px;
  margin: 15px 0;
  background: #fff;
  box-shadow: 0 0px 2px 2px #eee;
}
</style>