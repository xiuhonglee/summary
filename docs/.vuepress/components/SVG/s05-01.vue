
<template>
    <div class="s05-01">

        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
           <g>
                <path d="M80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80 Z" stroke="#aa0000" stroke-width="1" fill="yellow"/>

                <!-- 辅助线 -->
                <circle cx="125" cy="80" r="45" stroke="#aaa" fill="none"></circle>
                <circle cx="80" cy="125" r="45" stroke="#aaa" fill="none"></circle>

                <!-- 说明文字 -->
                <text x="30" y="70">
                    <tspan font-weight="bold" font-size="12" fill="red">M(80, 80)</tspan>
                </text>
                <circle cx="80" cy="80" r="2" stroke="none" fill="red"></circle>

                <text x="400" y="140" style="font-size: 14px; font-weight: bold; text-anchor: end">Large Arc Sweep Flag: 0</text>
                <text x="400" y="160" style="font-size: 14px; font-weight: bold; text-anchor: end">sweep-falg: 0</text>
            </g>

            <!-- <path d="M230 80
                A 45 45, 0, 1, 0, 275 125
                L 275 80 Z" fill="red"/>
            <path d="M80 230
                A 45 45, 0, 0, 1, 125 275
                L 125 230 Z" fill="purple"/>
            <path d="M230 230
                A 45 45, 0, 1, 1, 275 275
                L 275 230 Z" fill="blue"/> -->
        </svg>
    </div>
</template>

<style scoped>
.s05-01 {
  width: 520px;
  height: 200px;
  margin: 15px 0;
  background: #fff;
  box-shadow: 0 0px 2px 2px #eee;
}
</style>