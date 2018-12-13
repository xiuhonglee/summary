<template>
    <div class="s06-04">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="200" y="60" width="50" height="100" fill="#ffaa00">
                <animate
                    attributeName="width"
                    attributeType="CSS"
                    begin="button4.click"
                    from="50"
                    to="150"
                    dur="1s"
                    end="begin+0.5"
                    fill="freeze"
                ></animate>
            </rect>

            <g id="button4" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-04 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>