<template>
    <div class="s06-09">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="40" style="font-size: 14px; font-weight: bold; text-anchor: end">由黄色-绿色-紫色-红色渐变</text>
            <rect x="110" y="70" width="250" height="100" fill="yellow">
                <animate
                    attributeName="fill"
                    begin="button9.click"
                    values="yellow;green;purple;red"
                    keyTimes="0; 0.8; 0.9; 1"
                    dur="8s"
                    fill="freeze"
                ></animate>
            </rect>
            <g id="button9" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-09 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>