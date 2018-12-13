<template>
    <div class="s06-06">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="360" y="40" style="font-size: 14px; font-weight: bold; text-anchor: end">矩形动画播放1次又1.5秒后，圆形动画开始播放</text>
            <rect x="10" y="70" width="50" height="100" fill="#ffaa00">
                <animate
                    id="anim1"
                    attributeName="width"
                    attributeType="CSS"
                    begin="button6.click"
                    from="50"
                    to="150"
                    dur="3s"
                    fill="remove"
                    repeatCount="3"
                ></animate>
            </rect>
            <circle cx="340" cy="120" r="30" style="fill: #ff5777;">
                <animate
                    begin="anim1.repeat(1)+1.5"
                    attributeName="r"
                    attributeType="XML"
                    from="30"
                    to="60"
                    dur="3s"
                    fill="freeze"
                    repeatDur="5s"
                ></animate>
            </circle>
            <g id="button6" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-06 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>