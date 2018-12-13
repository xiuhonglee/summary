<template>
    <div class="s06-05">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="60" y="40" style="font-size: 14px; font-weight: bold; text-anchor: end">播放3次</text>
            <text x="360" y="40" style="font-size: 14px; font-weight: bold; text-anchor: end">持续5秒</text>
            <rect x="10" y="70" width="50" height="100" fill="#ffaa00">
                <animate
                    attributeName="width"
                    attributeType="CSS"
                    begin="button5.click"
                    from="50"
                    to="150"
                    dur="3s"
                    fill="remove"
                    repeatCount="3"
                ></animate>
            </rect>
            <circle cx="340" cy="120" r="30" style="fill: #ff5777;">
                <animate
                    id="a1"
                    begin="button5.click"
                    attributeName="r"
                    attributeType="XML"
                    from="30"
                    to="60"
                    dur="3s"
                    fill="freeze"
                    repeatDur="5s"
                ></animate>
            </circle>
            <g id="button5" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-05 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>