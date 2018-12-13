<template>
    <div class="s06-12">
        <svg width="520px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text
                x="250"
                y="40"
                style="font-size: 14px; font-weight: bold; text-anchor: end"
            >缩放、旋转叠加动画</text>
            <g transform="translate(200, 100)">
                <rect x="-10" y="-10" width="20" height="20" style="fill: #ffaa00; stroke: none;">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="scale"
                        from="1"
                        to="4 2"
                        additive="sum"
                        begin="button12.click"
                        dur="4s"
                        fill="freeze"
                    ></animateTransform>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0"
                        to="45"
                        additive="sum"
                        begin="button12.click"
                        dur="4s"
                        fill="freeze"
                    ></animateTransform>
                </rect>
            </g>
            <g id="button12" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-12 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>