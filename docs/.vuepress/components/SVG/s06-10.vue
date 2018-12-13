<template>
    <div class="s06-10">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text text-anchor="middle" x="200" y="100" style="visibility: hidden;">
                <set
                    attributeName="visibility"
                    attributeType="CSS"
                    to="visible"
                    begin="button10.click"
                    fill="freeze"
                ></set>
                Test &lt;set&gt; visibility attribute
            </text>
            <g id="button10" style="cursor: pointer;">
                <rect x="400" y="150" width="80" rx="5" ry="5" height="30" fill="#44ae7d"></rect>
                <text x="422" y="170" style="text-anchor: start; fill: #fff">Start</text>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.s06-10 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>