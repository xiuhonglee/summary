<template>
    <div class="s06-11">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="50" height="70" style="fill: #ffa000; stroke: none;">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    attributeType="XML"
                    from="1"
                    to="4 2"
                    begin="button11.click"
                    dur="4s"
                    fill="freeze"
                ></animateTransform>
            </rect>
            <g id="button11" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-11 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>