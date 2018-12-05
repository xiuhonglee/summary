<template>
    <div class="s06-08">
        <svg width="520px" height="220px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="30" style="font-size: 14px; font-weight: bold; text-anchor: end">正梯形变为倒梯形</text>
            <polygon points="150,50 370,50 460,170 60,170" fill="#ffaa00">
                <animate
                    attributeName="points"
                    attributeType="XML"
                    to="60,50 460,50 360,170 150,170"
                    begin="0s"
                    dur="5s"
                    repeatCount="indefinite"
                    fill="freeze"
                ></animate>
            </polygon>
        </svg>
    </div>
</template>

<style scoped>
.s06-08 {
    width: 520px;
    height: 200px;
    margin: 15px 0;
    background: #fff;
    box-shadow: 0 0px 2px 2px #eee;
}
</style>