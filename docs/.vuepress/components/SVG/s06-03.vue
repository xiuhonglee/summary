<template>
    <div class="s06-03">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="110" r="30" style="fill: #ff5777;">
                <animate
                    id="a1"
                    begin="button3.click"
                    attributeName="r"
                    attributeType="XML"
                    from="30"
                    to="60"
                    dur="2s"
                    fill="freeze"
                ></animate>
            </circle>
            <rect x="200" y="60" width="50" height="100" fill="#ffaa00">
                <animate
                    attributeName="width"
                    attributeType="CSS"
                    begin="button3.click"
                    from="50"
                    to="150"
                    dur="1s"
                    fill="freeze"
                ></animate>
            </rect>

            <g id="button3" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-03 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>